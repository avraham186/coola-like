import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import lecture1 from '../assets/images/lectures/lecture1.png'
import lecture2 from '../assets/images/lectures/lecture2.png'
import lecture3 from '../assets/images/lectures/lecture3.png'
import lecture4 from '../assets/images/lectures/lecture4.png'

export function HomePage() {
    const { jobs } = useSelector(state => state.jobsModule)
    return (
        <section className="home-page">
            <div className="flex column align-center justify-center">
                <div className="dont-miss flex column">
                    <span>#לא כדאי לפספס</span>
                    <span className="flex space-between">
                        <span>אירועי השבוע</span>
                        <Link to="/">לכל האירועים← </Link>
                    </span>
                    <div className="lectures-imgs flex">
                        <img src={lecture1} alt="lecture1" />
                        <img src={lecture2} alt="lecture2" />
                        <img src={lecture3} alt="lecture3" />
                        <img src={lecture4} alt="lecture4" />
                    </div>
                </div>
                <div className="junoior-jobs">
                    <div className="jobs-title flex space-between">
                        <span>לוח משרות לגוניורים</span>
                        <span>המשרות החמות של השבוע</span>
                    </div>
                    <div className="jobs flex column">
                        <div><Link to="/">לכל המשרות </Link></div>
                        <div className="jobs-cards flex">
                            {jobs && jobs.map(job => {
                                return <div key={job._id} className="job-card">{job.text}</div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="comunity-hart">
                    הלב של הקהילה
                </div>
            </div>
        </section>
    )
}