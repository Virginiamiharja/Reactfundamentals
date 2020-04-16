import React from 'react'
// Ini biar gapake a href
import {Link} from 'react-router-dom'

// Untuk navbar nanti pakenya dari bawaan bootstrap untuk react namanya react strap
class Navbar extends React.Component {
    render() {
        return(
            <div className="d-flex border align-items-center justify-content-around"
            style={{height:"50px"}}>
                {/* Nah kalo disini gapake a karena katanya a itu ngerefresh page jadi ga single page app gitu loh*/}
                {/* <a href="/registration"> Registration </a>
                <a href="/counter"> Counter </a> */}

                {/* Kalo pake link dia cuma ganti component tapi ga ngerefresh */}
                <Link to="/registration"  > Registration </Link>
                <Link to="/counter" > Counter </Link>
                <Link to="/profile" > Profile </Link>
                <Link to="/input" > Input Screen </Link>
            </div>
        )
    }
}

export default Navbar