const jwt = require("jsonwebtoken");
const { GraphQLScalarType } = require("graphql");
const mainDir = process.cwd();

const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const createToken = ({ id, username, name }, secret, expiresIn) => {
  return jwt.sign({ id, username, name }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    users: (_, __, { models }) => models.User.findAll(),
    user: (parent, { id }, { models }) => models.User.findByPk(id),
  },
  Mutation: {
    createUser: (_, { name }, { models }) => models.User.create({ name }),
    removeUser: (_, { id }, { models }) =>
      models.User.destroy({
        where: {
          id,
        },
      }),
    register: async (_, { name, username, password }, { models }) => {
      const user = { name, username, password };
      const registeredUser = await models.User.create(user);
      return typeof registeredUser.id === "number";
    },
    login: async (_, { username, password }, { models, secret }) => {
      const user = await models.User.findOne({ where: { username } });
      if (!user) throw Error("User not found!");
      const validatePassword = await user.validatePassword(password);
      if (!validatePassword) throw Error("Invalid User!");
      return {
        token: createToken(user, secret, "10m"),
      };
    },
    uploadImage: async (parent, { filename }, { models, me }) => {
      if (!me) throw Error("Not Authenticated");
      filename = `${mainDir}/uploads/${filename}`;
      try {
        const photo = await cloudinary.v2.uploader.upload(filename);
        await models.User.update(
          {
            photo: `${photo.public_id}.${photo.format}`,
          },
          { where: { username: me.username } }
        );
        return `${photo.public_id}.${photo.format}`;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  User: {
    car: (parent, _, { models }) =>
      models.Car.findAll({
        where: {
          userId: parent.id,
        },
      }),
    photo: (parent, { options }, { models }) => {
      const [width, q_auto, f_auto, face] = options;
      const cloudinaryOptions = {
        ...(q_auto === "true" && { quality: "auto" }),
        ...(f_auto === "true" && { fetch_format: "auto" }),
        ...(face && { crop: "thumb", gravity: "face" }),
        width,
        secure: true,
      };
      let url = cloudinary.url(parent.photo, cloudinaryOptions);
      return url;
    },
  },
  CloudinartOptions: new GraphQLScalarType({
    name: "GraphQLScalarType",
    parseValue(v) {
      return v;
    },
    serialize(v) {
      return v;
    },
    parseLiteral({ value }) {
      return value.split(",");
    },
  }),
};
module.exports = resolvers;
