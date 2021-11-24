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
        <div>
            {/* <JobsPage /> */}
            <Header />
            <Events />
            <Jobs />
            <Founders persons={persons} />
            <Subscribe />
        </div>
    );
}
