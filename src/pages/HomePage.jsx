import React from 'react'
import Header from "../cmps/home_page/Header";
import Events from "../cmps/home_page/Events";
import Jobs from "../cmps/home_page/Jobs";
import Founders from "../cmps/home_page/Founders";
import Subscribe from "../cmps/home_page/Subscribe";


export default function HomePage() {
    return (
        <div>
            <Header />
            <Events />
            <Jobs />
            <Founders />
            <Subscribe />
        </div>

    )
}