import React from "react";
import { GITHUB_USER_INFO } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 0,
      userInfo: {
        name: "Rishi",
        bio: "Engineer",
      },
    };

    // console.log("Child " + this.props.name + " Constructor");
  }

  async componentDidMount() {
    // console.log("Child " + this.props.name + " ComponentDidMount");
    // console.log("Component Did Mount");
    const data = await fetch(GITHUB_USER_INFO);
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  // componentDidMount() {
  //   console.log("Child " + this.props.name + " ComponentDidMount");
  // }

  componentDidUpdate() {
    // console.log("Child " + this.props.name + "ComponentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Child " + this.props.name + "componentWillUnmount");
  }

  render() {
    // console.log("Child " + this.props.name + " Render");

    const { count2 } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count1: {this.state.count1}</h1>
        <h1>Count2: {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Inc Count1
        </button>
        <h2>Name: {this.props.name}</h2> */}
        <img
          className="user-avatar"
          src={this.state.userInfo.avatar_url}
          alt="User Image"
        />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Bio: {this.state.userInfo.bio}</h3>
        <h3>Contact: {this.state.userInfo.login}</h3>
      </div>
    );
  }
}

export default UserClass;
