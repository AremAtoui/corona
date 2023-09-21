import React from 'react'
import './navbarre.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logout } from '../redux/UserSlice';

function Navbarre() {

    const user = useSelector((state) => state.user?.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (

        <div>

            {/* navbar */}
            {/* <div>
                <ul className="nav flex-column text-white w-100" style={{display:"flex",     marginLeft: "0px", marginTop: "-40px"}}>

                    <img src="" />

                    <li href="#" className="nav-link">
                        <i className="bx bxs-dashboard" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/">Home</Link></span>
                    </li>
                    <li href="#" className="nav-link">
                        <i className="bx bx-user-check" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/doctors">Doctors</Link></span>
                    </li>

                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/about">About</Link></span>
                    </li>
                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/contact">Contact</Link></span>
                    </li>
                    {!user ? <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/login">Connexion</Link></span>
                    </li> : null}
                    {user?.category == "admin" ? <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/dashboard">Dashboard</Link></span>
                    </li> : null}
                    {user ?
                        <>
                            <li href="#" className="nav-link">
                                <i className="bx bx-conversation" />
                                <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/profil">Welcome {user?.name}</Link></span>
                            </li>
                            <li href="#" className="nav-link" style={{ marginLeft: "-32px" }}>
                                <i className="bx bx-conversation" />
                                <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/profil"><img src={user?.image} style={{ width: "25px", height: "25px", borderRadius: "50%",position: "absolute",
    left: "599px" }} /></Link></span>
                            </li>
                            <li href="#" className="nav-link" style={{ marginLeft: "-54px" }}>
                                <i className="bx bx-conversation" />
                                <NavDropdown title="" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.2">Settings</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.3">
                                        <button className="btnlog" onClick={() => { dispatch(logout()); navigate("/login") }}>Logout</button></NavDropdown.Item>

                                </NavDropdown>

                            </li></> : null}



                
                </ul>

            </div> */}
            <section className="page-header" >
                <header class="site-header-one"><nav class="main-nav__one stricky original">
                    <div class="container-fluid"><div class="main-nav__logo-box"><a href="/">
                        <img width="137" src="https://vimns.vercel.app/assets/images/logo-1-1.png" alt="" /></a>
                        <a href="#" class="side-menu__toggler"><i class="fa fa-bars"></i></a></div>
                        <div class="main-nav__main-navigation">
                            <ul class=" main-nav__navigation-box">
                                <li class="dropdown"><a href="/">Home<button class="dropdown-btn">
                                    <i class="fa fa-angle-right"></i></button></a></li>
                                <li><a href="/about">About</a></li>
                                {/* <li class="dropdown">
                                    <a href="/news">News<button class="dropdown-btn">
                                    </button></a>
                                </li> */}
                                <li class="dropdown">
                                    <a href="/contact">Contact<button class="dropdown-btn">
                                    </button></a>
                                </li>








                            </ul></div>

                        <div class="main-nav__right"><a class="main-nav__btn" href="/prevention">Prevention</a></div>
                    </div></nav>
                    {/* <div class="container-fluid"><div class="main-nav__logo-box"><a href="/">
                                    <img width="137" src="/assets/images/logo-1-1.png" alt=""/></a>
                                    <a href="#" class="side-menu__toggler"><i class="fa fa-bars"></i></a>
                                    </div><div class="main-nav__main-navigation">
                                        <ul class=" main-nav__navigation-box"><li class="dropdown">
                                            <a href="/">Home<button class="dropdown-btn">
                                                <i class="fa fa-angle-right"></i></button></a>
                                                <ul><li><a href="/">Home 01</a></li>
                                                <li><a href="/index-2">Home 02</a></li>
                                                <li class="dropdown"><a href="#">Header Styles<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></a><ul><li><a href="/">Header 01</a></li><li><a href="/index-2">Header 02</a></li></ul>
                                                </li><li class="dropdown"><a href="#">Dark Styles<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></a><ul><li><a href="/index-dark">Dark 01</a></li><li><a href="/index-dark-2">Dark 02</a></li></ul></li></ul></li><li><a href="/about">About</a></li>
                                                <li><a href="/prevention">Preventions</a></li><li>
                                                    <a href="/faq">FAQs</a></li><li class="dropdown">
                                                        <a href="/news">News<button class="dropdown-btn">
                                                    <i class="fa fa-angle-right"></i></button></a><ul><li>
                                                        <a href="/news">News Page</a></li><li>
                                                            <a href="/news-details">News Details</a></li></ul></li>
                                                            <li><a href="/contact">Contact</a></li></ul></div>
                                                            <div class="main-nav__cta"><div class="main-nav__cta-icon">
                                                                <i class="vimns-icon-phone"></i></div>
                                                                <div class="main-nav__cta-content"><h3>
                                                                    <a href="tel:666-888-0000">666 888 0000</a></h3>
                                                                    <p>Helpline</p></div></div><div class="main-nav__right">
                                                                        <a class="main-nav__btn" href="/prevention">Prevention</a></div></div>


                {/* </header>     </section> */}
                    {/* <ul className="nav flex-column text-white w-100" style={{display:"flex",     marginLeft: "0px", marginTop: "-40px"}}>

<img src="" />

<li href="#" className="nav-link">
    <i className="bx bxs-dashboard" />
    <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/">Home</Link></span>
</li>
<li href="#" className="nav-link">
    <i className="bx bx-user-check" />
    <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/doctors">Doctors</Link></span>
</li>

<li href="#" className="nav-link">
  
    <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/about">About</Link></span>
</li>
<li href="#" className="nav-link">
    <i className="bx bx-conversation" />
    <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/contact">Contact</Link></span>
</li>
{!user ? <li href="#" className="nav-link">
    <i className="bx bx-conversation" />
    <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/login">Connexion</Link></span>
</li> : null}
{user?.category == "admin" ? <li href="#" className="nav-link">
    <i className="bx bx-conversation" />
    <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/dashboard">Dashboard</Link></span>
</li> : null}
{user ?
    <>
        <li href="#" className="nav-link">
            <i className="bx bx-conversation" />
            <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/profil">Welcome {user?.name}</Link></span>
        </li>
        <li href="#" className="nav-link" style={{ marginLeft: "-32px" }}>
            <i className="bx bx-conversation" />
            <span className="mx-2"><Link style={{ textDecoration: "none", color: "green", fontFamily: "Poppins, sans-serif" }} to="/profil"><img src={user?.image} style={{ width: "25px", height: "25px", borderRadius: "50%",position: "absolute",
left: "599px" }} /></Link></span>
        </li>
        <li href="#" className="nav-link" style={{ marginLeft: "-54px" }}>
            <i className="bx bx-conversation" />
            <NavDropdown title="" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Settings</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                    <button className="btnlog" onClick={() => { dispatch(logout()); navigate("/login") }}>Logout</button></NavDropdown.Item>

            </NavDropdown>

        </li></> : null}




</ul> */}
                </header>
            </section>

        </div>
    )
}

export default Navbarre