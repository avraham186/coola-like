import React from "react";
import Header from "../cmps/home_page/Header";
import Events from "../cmps/home_page/Events";
import Jobs from "../cmps/home_page/Jobs";
import { Founders } from "../cmps/home_page/Founders";
import { Subscribe } from "../cmps/home_page/Subscribe";
import { useSelector } from "react-redux";
import { NewTask } from "../cmps/tasks/NewTask";

export default function HomePage() {
  const { persons } = useSelector((state) => state.communityHartModule);

  return (
    <div>
      <Header />
      <NewTask />
      <Events />
      <Jobs />
      <Founders persons={persons} />
      <Subscribe />
    </div>
  );
}
