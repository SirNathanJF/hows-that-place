import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;
export const CREATE_PIN = gql`
  mutation createPin(
    $title: String
    $desc: String
    $rating: Int
    $lat: Int
    $long: Int
  ) {
    createPin(
      title: $title
      desc: $description
      rating: $rating
      lat: $lat
      long: $long
    ) {
      _id
      title
      desc
    }
  }
`;
