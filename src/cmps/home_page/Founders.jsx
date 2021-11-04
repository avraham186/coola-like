import React, { useEffect, useState } from "react";
import LinkIcon from "../../assets/images/linkedin.svg";

export const Founders = (props) => {
  return (
    <div className="box-person flex column space-between">
      <div className="box-person-head flex column">
        <h1 className="box-person-headline">#הלב של_הקהילה</h1>
        <span className="box-person-sub-headline">מוזמנים להתחבר ולדבר איתנו!</span>
      </div>
      <div className="box-person-content flex space-between">
        {props.persons.map((person) => {
          return (
            <div
              className="founders flex column align-center"
              key={person.name}
            >
              <object
    className="person-img"
    data={person.img}
    width="140"
    height="138"
    />
              <div className="founder-content justify-center align-center">
                <span className="person-name">
                  <object data={LinkIcon} width="24" height="23.8"/>{" "}
                  {""}
                  {person.name}
                </span>
                <span className="role-text">{person.roleText}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
