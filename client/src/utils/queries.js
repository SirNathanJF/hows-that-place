import { gql } from "@apollo/client"

export const GET_ALL_PINS = gql`
  query pins {
    pins {
      _id
      title
      desc
      rating
      long
      lat
    }
  }
`;
