import React from 'react'
import lecture1 from '../assets/images/lectures/lecture1.png'
import lecture2 from '../assets/images/lectures/lecture2.png'
import lecture3 from '../assets/images/lectures/lecture3.png'
import lecture4 from '../assets/images/lectures/lecture4.png'
export function HomePage() {
    return (
        <section className="home-page main-layout flex column align-center justify-center">
            <div className="dont-miss flex">
                לא כדאי לפספס
                <img src={lecture1} alt="lecture1" />
                <img src={lecture2} alt="lecture2" />
                <img src={lecture3} alt="lecture3" />
                <img src={lecture4} alt="lecture4" />
            </div>
            <div className="junoior-jobs">
                לוח משרות לגוניורים
            </div>
            <div className="comunity-hart">
                הלב של הקהילה
            </div>
        </section>
    )
}