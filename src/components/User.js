import { useEffect, useState } from "react";
import { GITHUB_USER_INFO } from "../utils/constants";

const User = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "Rishi",
    bio: "Engineer",
  });

  useEffect(() => {
    fetchData();

    const timer = setInterval(() => {
      console.log("Jai Shree Ram");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch(GITHUB_USER_INFO);
    const json = await data.json();
    console.log(json);
    setUserInfo(json);
  };

  return (
    <div className="user-card">
      <img className="user-avatar" src={userInfo.avatar_url} alt="User Image" />
      {/* <h2>Name: {props.name}</h2> */}
      <h2>Name: {userInfo.name}</h2>
      <h3>Bio: {userInfo.bio}</h3>
      <h3>Contact: {userInfo.login}</h3>
    </div>
  );
};

export default User;
