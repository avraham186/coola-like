// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function AppHeader() {

    return (
        <header className="header-layout full">
            <div className="app-header main-layout">
                <div className="flex space-between justify-center align-center">
                    <Link to="/"><span>כניסת מנהלים</span> <span>כניסת מנהלים</span></Link>
                    <li className="list clean-list flex">
                        <ul><Link to="/">לוח משרות</Link></ul>
                        <ul><Link to="/">אירועים</Link></ul>
                        <ul><Link to="/">טיפים ומידע</Link></ul>
                    </li>
                    <Link to="/"><span className="logo">LOGO</span></Link>
                </div>
            </div>
        </header >
    )
}