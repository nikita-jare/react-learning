import UserClass, { User } from "./User";
import React from "react";
import { UserContext } from "../utils/userContext";
const About = () => {
  return (
    <div className=" min-h-screen p-5 shadow-lg dark:bg-black bg-white text-black dark:text-white">
      <h1 className="text-2xl font-bold m-2">About us</h1>
      <p className="text-lg m-2">We are a bunch of React developers</p>
      <User name="Nikita-function" city="New York" phone="1234567890" />
      <UserClass name="Nikita-class" city="Pune" phone="1234567890" />
    </div>
  );
};

class AboutClass extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    return (
      <div className=" min-h-screen p-5 shadow-lg dark:bg-black bg-white text-black dark:text-white">
        <h1 className="text-2xl font-bold m-2">About us</h1>
        <p className="text-lg m-2">We are a bunch of React developers</p>
        <p className="text-lg italic m-2">
          Using Context in class based component
        </p>
        <UserContext.Consumer>
          {(data) => {
            return <p className="text-lg italic m-2">{data.loggedInUser}</p>;
          }}
        </UserContext.Consumer>
        <br></br>
        <User name="Nikita-function" city="New York" phone="1234567890" />
        <UserClass name="Nikita-class" city="Pune" phone="1234567890" />
      </div>
    );
  }
}

export default AboutClass;
