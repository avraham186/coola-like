import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import Header from "../cmps/home_page/Header.jsx";
import Events from "../cmps/home_page/Events.jsx";
import Jobs from "../cmps/home_page/Jobs.jsx";
import { Founders } from "../cmps/home_page/Founders.jsx";
import { Subscribe } from "../cmps/home_page/Subscribe.jsx";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "../store/user.js";

export default function HomePage({ props }) {
  const { persons } = useSelector(
    ({ entities }) => entities.communityHeartModule
  );
  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    if (location.search.includes('login=success')) {
      console.log("location.search.includes('login=success')",location.search.includes('login=success'))
      dispatch(googleLogin())
    }
  }, [])

  return (
    <div className="home-page full">
      <div className="header-comp main-layout">
        <Header />
      </div>
      <div className="events-comp main-layout">
        <Events />
      </div>
      <div className="jobs-comp main-layout">
        <Jobs />
      </div>
      <div className="founders-comp main-layout">
        <Founders persons={persons} />
      </div>
      <div className="subscribe-comp main-layout">
        <Subscribe />
      </div>
    </div>
  );
}
