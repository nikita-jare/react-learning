import React from "react";
import { useState } from "react";

//function based component
export const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  return (
    <div className="user-card">
      <h2>Name:{props.name}</h2>
      <h3>City:{props.city}</h3>
      <h3>Phone:{props.phone}</h3>
      <h4>count:{count}</h4>
      <h4>count2:{count2}</h4>
    </div>
  );
};

//class based component
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        city: "Default",
        phone: "1234567890",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nikita-jare");
    const json = await data.json();
    console.log(json);
    console.log("child componentDidMount");

    this.setState({ userInfo: json });
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h3>City:{this.state.userInfo.location}</h3>
        <h3>Phone:{this.state.userInfo.phone}</h3>
        <h4>count:{this.state.count}</h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
        <h4>count2:{this.state.count2}</h4>
      </div>
    );
  }
}

export default UserClass;
