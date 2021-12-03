import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/coola_like_logo.svg'
import AccountMenu from './AccountMenu'

export function AdminNav() {

    return (
        <section className="admin-navbar-wrapper full">
            <div className="main-layout">

                <div className="admin-navbar">

                    <div className="left-list clean-list">

                        <AccountMenu />

                    </div>

                    <ul className="list clean-list flex">
                        <li className="selected"><Link to="/"><span>בית</span></Link></li>
                        <li><Link to="/" className='disabled-link'><span>הודות</span></Link></li>
                        <li><Link to="/jobs"><span>לוח משרות</span></Link></li>
                        <li><Link to="/events"><span>אירועים</span></Link></li>
                        <li><Link to="/" className='disabled-link'><span>טיפים ומידע</span></Link></li>
                        <li><Link to="/projects"><span>פרויקטים</span></Link></li>

                    </ul>


                    <Link to="/">
                        <object data={logo} type="image/svg+xml" className="logo" />
                    </Link>


                </div>
            </div>
        </section>
    )
}
