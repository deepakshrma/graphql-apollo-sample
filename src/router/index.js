const fetch = require("node-fetch");

async function fetchGQL(query, variables = {}) {
  const response = await fetch("http://localhost:4000/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  return response.json();
}

const index = async (req, res) => {
  const query = `{
    users {
      id
      name
    }
  }`;
  const response = await fetchGQL(query);
  res.render("index", {
    intro: "User Info",
    users: response.data.users,
  });
};
const userInfo = async (req, res) => {
  const { id } = req.params;
  const query = `{
    user(id: ${id}) {
      id
      name
      username
      photo
      car {
        id
        make
        model
        colour
      }
    }
  }`;
  if (id) {
    const response = await fetchGQL(query, { id });
    return res.render("user", {
      user: response.data.user,
    });
  }
  res.status(400).send("Please select correct user id!");
};

module.exports = {
  index,
  userInfo,
};
