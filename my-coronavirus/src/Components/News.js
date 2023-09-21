import React, { useState } from 'react'
import CardDoctor from './CardDoctor';
import { useSelector } from 'react-redux';

function News({ ping, setping }) {
  const [text, settext] = useState("")
  const doctors = useSelector((state) => state.doctor?.doctors);
  return (
    <div>
      <header class="site-header-one">
<nav class="main-nav__one stricky original">
<div class="container-fluid">
<div class="main-nav__logo-box"><a href="/">
<img width="137" src="https://vimns.vercel.app/assets/images/logo-1-1.png" alt=""/></a>
<a href="#" class="side-menu__toggler"><i class="fa fa-bars"></i></a></div>
<div class="main-nav__main-navigation"><ul class=" main-nav__navigation-box">
<li class="dropdown"><a href="/">Home<button class="dropdown-btn">
<i class="fa fa-angle-right"></i></button></a></li><li><a href="/about">About</a></li>
<li class="dropdown"><a href="/news">News<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></a></li>
    <li><a href="/contact">Contact</a></li></ul></div><div class="main-nav__right"><a class="main-nav__btn" href="/prevention">Prevention</a></div></div></nav>
       </header>
       <section class="page-header"><div class="container">
        <h2>News</h2><ul class="thm-breadcrumb list-unstyled"><li>
            <a href="/">Home</a></li><li><span>News</span></li
            ></ul></div></section>


          




    </div>
  )
}

export default News