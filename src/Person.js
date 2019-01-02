import React from "react";
import classes from "./Person.module.css";

const Person = props => {
  const { name, age, job, image } = props.person;
  const url = `https://randomuser.me/api/portraits/med/men/${image}.jpg`;
  return (
    <div className={classes.person}>
      <img src={url} alt="Profile Pic" />
      <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
        <h3>{job}</h3>
      </div>
    </div>
  );
};

export default Person;
