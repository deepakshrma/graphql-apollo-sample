const { sequelize } = require("./models/database");

const models = require("./models");

const createData = async () => {
  await models.User.create(
    {
      name: "Deepak",
      cars: [{ make: "Porsche", model: "911", colour: "red" }],
    },
    { include: [models.Car] }
  );
  await models.User.create(
    {
      name: "Ram",
      cars: [
        { make: "Porsche", model: "911", colour: "red" },
        { make: "Nissan", model: "GT-R", colour: "green" },
      ],
    },
    { include: [models.Car] }
  );
};
sequelize.sync({ force: true }).then(async () => {
  try {
    await createData();
    process.exit();
  } catch (e) {
    console.log(e);
  }
});
/*
const users = [
  {
    id: 1,
    index: 0,
    guid: "37f4d41b-9975-4786-8f6f-e802bfc68678",
    isActive: false,
    balance: "$1,266.79",
    picture: "http://placehold.it/32x32",
    age: 37,
    eyeColor: "blue",
    name: "Kinney Lawson",
    gender: "male",
    company: "XTH",
    email: "kinneylawson@xth.com",
    phone: "+1 (981) 429-3921",
    address: "806 Lewis Avenue, Marienthal, Texas, 9516",
    about:
      "Cillum nisi cupidatat laboris culpa Lorem ullamco eiusmod velit sunt. Adipisicing eiusmod ut consequat aliqua ad qui est aliqua labore eiusmod incididunt ut quis. Aliquip mollit do adipisicing do officia ex aute qui fugiat aliquip ullamco ullamco adipisicing.\r\n",
    registered: "2019-07-29T10:20:39 -08:00",
    latitude: -88.843092,
    longitude: 162.639545,
    tags: ["Lorem", "labore", "nostrud", "esse", "anim", "anim", "labore"],
    friends: [
      {
        id: 0,
        name: "Aurora Arnold",
      },
      {
        id: 1,
        name: "Guerrero Hancock",
      },
      {
        id: 2,
        name: "Rae Nguyen",
      },
    ],
    greeting: "Hello, Kinney Lawson! You have 1 unread messages.",
    favoriteFruit: "apple",
    cars: [2, 3],
  },
  {
    id: 2,
    index: 1,
    guid: "2366af0d-cfd8-423e-ba92-faeda6d022d6",
    isActive: false,
    balance: "$1,601.80",
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "blue",
    name: "Geneva Irwin",
    gender: "female",
    company: "EBIDCO",
    email: "genevairwin@ebidco.com",
    phone: "+1 (937) 542-2585",
    address: "698 Bogart Street, Fruitdale, Pennsylvania, 2731",
    about:
      "Veniam esse ut commodo do ullamco aliqua laboris elit est aliquip. Ex excepteur culpa veniam cupidatat commodo duis fugiat mollit. Aliqua irure proident duis Lorem. Aliqua culpa proident id amet nostrud consequat Lorem tempor.\r\n",
    registered: "2015-02-14T03:56:42 -08:00",
    latitude: -2.850937,
    longitude: -80.779422,
    tags: ["officia", "id", "laboris", "ad", "amet", "est", "tempor"],
    friends: [
      {
        id: 0,
        name: "Queen Abbott",
      },
      {
        id: 1,
        name: "Glenda Morin",
      },
      {
        id: 2,
        name: "Genevieve Mcintosh",
      },
    ],
    greeting: "Hello, Geneva Irwin! You have 3 unread messages.",
    favoriteFruit: "strawberry",
    cars: [1, 3],
  },
  {
    id: 3,
    index: 2,
    guid: "15a896f2-0c54-4412-83c4-a9235b15fe61",
    isActive: false,
    balance: "$2,339.96",
    picture: "http://placehold.it/32x32",
    age: 24,
    eyeColor: "blue",
    name: "Gonzalez Robbins",
    gender: "male",
    company: "VERTON",
    email: "gonzalezrobbins@verton.com",
    phone: "+1 (810) 445-3198",
    address: "797 Sutton Street, Harrison, Montana, 5354",
    about:
      "Occaecat dolore ea pariatur exercitation velit. Minim quis eu occaecat eu adipisicing reprehenderit aliqua nisi dolor nulla. Culpa dolore veniam laboris sit. Commodo nisi incididunt eu veniam quis aute sint ut. Occaecat sunt proident incididunt id tempor.\r\n",
    registered: "2017-04-11T03:19:16 -08:00",
    latitude: -82.459209,
    longitude: 54.929111,
    tags: [
      "nulla",
      "incididunt",
      "quis",
      "ipsum",
      "irure",
      "excepteur",
      "duis",
    ],
    friends: [
      {
        id: 0,
        name: "Terrell Carroll",
      },
      {
        id: 1,
        name: "Foster Macias",
      },
      {
        id: 2,
        name: "Sofia Ramsey",
      },
    ],
    greeting: "Hello, Gonzalez Robbins! You have 1 unread messages.",
    favoriteFruit: "apple",
    cars: [5, 4],
  },
  {
    id: 4,
    index: 3,
    guid: "2d70878a-4112-4581-b7c3-09873c9378b1",
    isActive: true,
    balance: "$3,490.63",
    picture: "http://placehold.it/32x32",
    age: 33,
    eyeColor: "brown",
    name: "Mayo Beasley",
    gender: "male",
    company: "INFOTRIPS",
    email: "mayobeasley@infotrips.com",
    phone: "+1 (805) 416-3546",
    address: "924 Monroe Street, Juntura, Puerto Rico, 6261",
    about:
      "Aute velit ex excepteur do dolor anim dolor exercitation minim officia. Id pariatur amet esse cupidatat anim qui pariatur aute cillum non. Ex dolore nostrud ea reprehenderit veniam veniam nulla pariatur aliquip esse commodo. Reprehenderit laboris fugiat mollit aliquip. Incididunt commodo incididunt ut aliqua quis occaecat aute dolor id ipsum labore commodo.\r\n",
    registered: "2019-10-10T11:40:31 -08:00",
    latitude: -48.850931,
    longitude: 146.387597,
    tags: ["qui", "irure", "ea", "aliquip", "duis", "enim", "culpa"],
    friends: [
      {
        id: 0,
        name: "Louise Gibson",
      },
      {
        id: 1,
        name: "Helen Holloway",
      },
      {
        id: 2,
        name: "Valencia Allison",
      },
    ],
    greeting: "Hello, Mayo Beasley! You have 4 unread messages.",
    favoriteFruit: "apple",
    cars: [2],
  },
  {
    id: 5,
    index: 4,
    guid: "77f25ff0-c382-4334-b843-1d4702dfdba3",
    isActive: false,
    balance: "$2,400.21",
    picture: "http://placehold.it/32x32",
    age: 20,
    eyeColor: "blue",
    name: "Shari Benton",
    gender: "female",
    company: "TRASOLA",
    email: "sharibenton@trasola.com",
    phone: "+1 (835) 474-3127",
    address: "720 Guernsey Street, Adamstown, South Dakota, 8027",
    about:
      "Consectetur duis aliqua commodo pariatur magna quis cupidatat laboris. Excepteur excepteur sit velit esse officia occaecat culpa deserunt ut. Cupidatat ipsum cillum qui cillum cillum sunt mollit tempor adipisicing voluptate. Commodo velit exercitation nisi amet nostrud do cupidatat id eu. Consectetur voluptate qui non magna ipsum. Ut eu exercitation reprehenderit adipisicing fugiat officia cillum cupidatat. Consectetur culpa labore aute amet.\r\n",
    registered: "2019-02-13T11:15:24 -08:00",
    latitude: -17.066473,
    longitude: 99.447403,
    tags: ["tempor", "dolore", "in", "do", "quis", "mollit", "labore"],
    friends: [
      {
        id: 0,
        name: "Wise Crosby",
      },
      {
        id: 1,
        name: "Elva Compton",
      },
      {
        id: 2,
        name: "Krystal Michael",
      },
    ],
    greeting: "Hello, Shari Benton! You have 2 unread messages.",
    favoriteFruit: "strawberry",
    cars: [1],
  },
];
const cars = [
  {
    id: 1,
    img: "2004_Porsche_911_Carrera_type_997.jpg",
    make: "Porsche",
    model: "911",
    colour: "red",
    price: 135000,
    quality: [
      {
        name: "overall",
        rating: 1,
      },
      {
        name: "mechanical",
        rating: 4,
      },
      {
        name: "powertrain",
        rating: 2,
      },
      {
        name: "body",
        rating: 4,
      },
      {
        name: "interior",
        rating: 3,
      },
      {
        name: "accessories",
        rating: 2,
      },
    ],
    wiki: "http://en.wikipedia.org/wiki/Porsche_997",
    ownedBy: 1,
  },
  {
    id: 2,
    img: "250px-Nissan_GT-R.jpg",
    make: "Nissan",
    model: "GT-R",
    price: 80000,
    colour: "green",
    quality: [
      {
        name: "overall",
        rating: 2,
      },
      { name: "mechanical", rating: 3 },
      { name: "powertrain", rating: 5 },
      { name: "body", rating: 4 },
      { name: "interior", rating: 2 },
      { name: "accessories", rating: 2 },
    ],
    wiki: "http://en.wikipedia.org/wiki/Nissan_Gt-r",
    ownedBy: 2,
  },
  {
    id: 3,
    img: "250px-BMW_M3_E92.jpg",
    make: "BMW",
    model: "M3",
    price: 60500,
    colour: "black",
    quality: [
      { name: "overall", rating: 3 },
      { name: "mechanical", rating: 5 },
      { name: "powertrain", rating: 3 },
      { name: "body", rating: 4 },
      { name: "interior", rating: 5 },
      { name: "accessories", rating: 3 },
    ],
    wiki: "http://en.wikipedia.org/wiki/Bmw_m3",
    ownedBy: 3,
  },
  {
    id: 4,
    img: "250px-Audi_S5.jpg",
    make: "Audi",
    model: "S5",
    price: 53000,
    quality: [
      { name: "overall", rating: 4 },
      { name: "mechanical", rating: 1 },
      { name: "powertrain", rating: 1 },
      { name: "body", rating: 4 },
      { name: "interior", rating: 1 },
      { name: "accessories", rating: 5 },
    ],
    wiki: "http://en.wikipedia.org/wiki/Audi_S5#Audi_S5",
    ownedBy: 4,
  },
  {
    id: 5,
    img: "250px-2007_Audi_TT_Coupe.jpg",
    make: "Audi",
    model: "TT",
    price: 40000,
    quality: [
      {
        name: "overall",
        rating: 5,
      },
      { name: "mechanical", rating: 2 },
      { name: "powertrain", rating: 2 },
      { name: "body", rating: 3 },
      { name: "interior", rating: 4 },
      { name: "accessories", rating: 1 },
    ],
    wiki: "http://en.wikipedia.org/wiki/Audi_TT",
    ownedBy: 5,
  },
];
module.exports = {
  users,
  cars,
};
*/
