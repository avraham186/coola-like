import React from "react";
import Header from "../cmps/home_page/Header.jsx";
import Events from "../cmps/home_page/Events.jsx";
import Jobs from "../cmps/home_page/Jobs.jsx";
import { Founders } from "../cmps/home_page/Founders.jsx";
import { Subscribe } from "../cmps/home_page/Subscribe.jsx";
import { useSelector } from "react-redux";
import JobsPage from "../cmps/jobs/JobsPage";
export default function HomePage() {
  const { persons } = useSelector(
    ({ entities }) => entities.communityHeartModule
  );

  return (
    <div className="home-page full">
      <Header />
      <div className="events-comp main-layout">
        <Events />
      </div>
      <div className="jobs-comp main-layout">
        <Jobs />
      </div>
      <div className="founders-comp main-layout">
        <Founders persons={persons} />
      </div>
      <div className="sunscribe-comp main-layout">
        <Subscribe />
      </div>
    </div>
  );
}
