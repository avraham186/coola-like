import React from "react";
import LinkIcon from "../../assets/images/home-page-imgs/linkedin.svg";

export const Founders = ({persons}) => {
    return (
        <div className="box-person flex column space-between">
            <div className="box-person-head flex column">
                <h1 className="box-person-headline">#הלב של_הקהילה</h1>
                <span className="box-person-sub-headline">
          מוזמנים להתחבר ולדבר איתנו!
        </span>
            </div>
            <div className="box-person-content flex space-between">
                {persons.map((person, i) => {
                    return (
                        <div className="founders flex column align-center" key={i}>
                            <object
                                className="person-img"
                                data={person.img}
                                width="140"
                                height="138"
                                type="image/svg+xml"
                            />
                            <div className="founder-content justify-center align-center">
                <span className="person-name">
                  <object
                      data={LinkIcon}
                      width="24"
                      height="23.8"
                      type="image/svg+xml"
                  />
                    {" "}
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
