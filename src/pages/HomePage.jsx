import React from "react";
import Header from "../cmps/home_page/Header";
import Events from "../cmps/home_page/Events";
import Jobs from "../cmps/home_page/Jobs";
import { Founders } from "../cmps/home_page/Founders.jsx";
import { Subscribe } from "../cmps/home_page/Subscribe.jsx";
import { useSelector } from "react-redux";
import { NewTask } from "../cmps/tasks/NewTask";

export default function HomePage() {
  const { persons } = useSelector((state) => state.communityHartModule);

  return (
    <div>
      <NewTask />
      <Header />
      <Events />
      <Jobs />
      <Founders persons={persons} />
      <Subscribe />
    </div>
  );
}
