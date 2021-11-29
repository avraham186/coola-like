import React from "react";
import Header from "../cmps/home_page/Header.jsx";
import Events from "../cmps/home_page/Events.jsx";
import Jobs from "../cmps/home_page/Jobs.jsx";
import { Founders } from "../cmps/home_page/Founders.jsx";
import { Subscribe } from "../cmps/home_page/Subscribe.jsx";
import { useSelector } from "react-redux";

export default function HomePage() {
    const { persons } = useSelector(
        ({ entities }) => entities.communityHeartModule
    );

    return (
        <div>
            <Header />
            <Events />
            <Jobs />
            <Founders persons={persons} />
            <Subscribe />
        </div>
    );
}
