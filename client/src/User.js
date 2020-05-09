import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
const query = gql`
  {
    users {
      name
      id
      car {
        model
        make
        colour
      }
    }
  }
`;
const User = () => {
  return (
    <div>
      <ul>
        <Query query={query}>
          {({ data, loading }) => {
            if (loading) return <h2>Loading...</h2>;
            return data.users.map(({ name, car }) => {
              return (
                <li>
                  {name} <p>{JSON.stringify(car)}</p>
                </li>
              );
            });
          }}
        </Query>
      </ul>
    </div>
  );
};
export default User;
