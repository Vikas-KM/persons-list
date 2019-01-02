import React from "react";
import Person from "./Person";

const PersonList = () => {
  const persons = [
    { name: "Keith", age: 30, job: "web designer", image: 23 },
    { name: "Aaron", age: 45, job: "web developer", image: 37 },
    { name: "John", age: 16, job: "Artist", image: 67 },
    { name: "Tim", age: 55, job: "Chef", image: 18 }
  ];
  return (
    <div>
      {persons.map(person => (
        <Person person={person} />
      ))}
    </div>
  );
};

export default PersonList;
