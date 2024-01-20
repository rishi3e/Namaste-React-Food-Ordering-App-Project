import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor() {
    super();
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }

  componentDidUpdate() {
    // console.log("Parent ComponentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Parent ComponentWillUnmount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Page:</h1>
        <h2>User Information-</h2>
        {/* <User /> */}
        <UserClass name={"Child1 (class)"} />
        <UserClass name={"Child2 (class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Page:</h1>
//       <h2>User Information-</h2>
//       {/* <User name={"Rishi Gaur (function)"} /> */}
//       <UserClass name={"Rishi Gaur (class)"} />
//     </div>
//   );
// };

export default About;
