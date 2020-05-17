import React from "react";
import "./main.styles.scss";
import Card from "@material-ui/core/Card";

const Main = (user) => {
  return (
    
      <Card className="user__box">
        <div className="img__box">
          <img className="image" src={user.image} alt="profile pic" />
        </div>
        <div className="text__box">
          <span className="name">{user.firstName + " " + user.lastName}</span>
        </div>
      </Card>
  );
};

export default Main;
