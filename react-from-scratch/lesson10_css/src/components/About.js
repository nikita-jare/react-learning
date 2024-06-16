import UserClass, { User } from "./User";
import React from "react";
const About = () => {
  return (
    <div className="dark:bg-black bg-white">
      <h1>About us</h1>
      <p>We are a bunch of React developers</p>
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
      <div>
        <h1>About us</h1>
        <p>We are a bunch of React developers</p>
        <User name="Nikita-function" city="New York" phone="1234567890" />
        <UserClass name="Nikita-class" city="Pune" phone="1234567890" />
      </div>
    );
  }
}

export default About;
