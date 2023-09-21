import React from 'react'
import './home.css';
import { BsFillCaretRightFill} from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {TiTickOutline}  from "react-icons/ti";
import {PiVirusFill}  from "react-icons/pi";
import {GiJasonMask}  from "react-icons/gi";
import {}from "react-icons/ti";
import { Tilt } from 'react-tilt';
import Navbarre from './Navbarre';
import { GoAlert } from "react-icons/go";
function Home() {
  return (
    <div>
{/* 
        <img src="https://vimns.vercel.app/assets/images/shapes/banner-bg-shape-1-1.png"/> */}
    <Navbarre/>
   

        <section class="banner-one">
            <img src="https://vimns.vercel.app/assets/images/shapes/banner-bg-shape-1-1.png" alt="" class="banner-one__moc"/>
            <div class="container"><div class="banner-one__video wow fadeInUp animated" data-wow-animation-duration="1500ms" style={{visibility: "visible", animationName: "fadeInUp"}}>
                <img src="	https://vimns.vercel.app/assets/images/resources/video-1-1.jpg" alt=""/>
                <a href="https://www.youtube.com/watch?v=Xj1nUFFVK1E" class="video-popup banner-one__video-btn"><i class="fa fa-play"><BsFillCaretRightFill></BsFillCaretRightFill></i></a></div>
                <div class="row"><div class="col-lg-6">
                    <div class="banner-one__content"><h3>How To Protect Yourself <br/>From <span>CoronaVirus?</span></h3>
                    <p>Nulla facilisi. Proin felis neque, suscipit egestas erat a <br/> tincidunt finibus magna consectetur lacus.</p>
                    <a class="thm-btn banner-one__btn" href="/about">Discover More</a></div></div></div></div>
                    </section>
    

                    <section class="cta-three">
      <img src="	https://vimns.vercel.app/assets/images/shapes/about-bg-1-1.png" class="cta-three__bg" alt=""/>
      <div class="container"><div class="inner-container"><div class="cta-three__icon">
        <i><GoAlert></GoAlert></i></div><div class="cta-three__content">
          <h3>Coronavirus disease COVID-19 Alert</h3><div class="cta-three__btn-block">
            <a href="/contact" class="cta-three__btn">Help and Information</a></div></div></div></div></section>

            <section class="about-one">
  <img src="	https://vimns.vercel.app/assets/images/shapes/virus-shape-1-1.png" class="about-one__virus" alt=""/>
  <div class="container"><div class="inner-container">
  <div class="row13"><div class="col-lg-6">
    <div class="about-one__images wow fadeInLeft animated" data-wow-animation-duration="1500ms" style={{visibility: "visible", animationName: "fadeInLeft"}}>
      <img src="https://vimns.vercel.app/assets/images/resources/about-1-1.jpg" alt=""/>
      <img src="	https://vimns.vercel.app/assets/images/resources/about-1-2.jpg" alt=""
      style={{    marginLeft: "-120px",
        marginTop: "-250px", borderRadius: "10px"}}/>
      <a href="https://vimns.vercel.app/href=https://www.youtube.com/watch?v=Xj1nUFFVK1E" class="about-one__video-btn video-popup">
      <i class="fa fa-play"><BsFillCaretRightFill></BsFillCaretRightFill></i></a></div><div class="about-one__fact-wrap">
        <div class="about-one__fact"><div class="about-one__fact-icon"><i ><GiJasonMask></GiJasonMask></i></div>
        <div class="about-one__fact-content"><h4>387000</h4><p>Recovered <br/> Patients</p></div></div></div></div>
        <div class="col-lg-6"><div class="about-one__content" ><div class="block-title text-left">
          <p>Introduction of Coronavirus </p><h3>Coronavirus disease (COVID-19)</h3></div>
          <div class="about-one__icon-box"><div class="about-one__icon"><i>
            <PiVirusFill   style={{    marginLeft: "-10px",
        marginTop: "-80px", color:"orange"}}></PiVirusFill></i></div>
          <div class="about-one__icon-content"><p>Coronavirus disease is an infectious disease caused by a new virus.</p>
          </div></div><p>There are many variations of passages of Lorem Ipsum available,
             but the majority have suffered alteration in some form, by injected humour, or not that ahnd randomised.</p>
             <ul class="list-unstyled about-one__list"><li>
              <i class="vimns-icon-tick"><TiTickOutline style={{color:"orange"}}></TiTickOutline></i> Wash your hands regularly for 20 seconds.</li><li>
                <br/><i class="vimns-icon-tick"><TiTickOutline style={{color:"orange"}}></TiTickOutline></i> Cover your nose and mouth with a disposable tissue.</li><li>
                <br/><i class="vimns-icon-tick"><TiTickOutline style={{color:"orange"}}></TiTickOutline></i> Avoid close contact (1 meter or 3 feet) with people.</li><li>
                <br/><i class="vimns-icon-tick"><TiTickOutline style={{color:"orange"}}></TiTickOutline></i> Stay home and self-isolate from others in the household.</li><li>
                <br/><i class="vimns-icon-tick"><TiTickOutline style={{color:"orange"}}>
              </TiTickOutline></i> Protect yourself and help prevent spreading the virus.</li></ul>
            <a href="#" class="thm-btn about-one__btn" style={{marginLeft: "85px",  backgroundImage: "linear-gradient(-90deg, rgb(35, 231, 234) 0%, rgb(10, 106, 214) 51%, rgb(35, 231, 234) 100%)", marginTop: "25px"}}>Discover More</a></div></div></div></div></div></section>

                    <section class="service-one"><div class="container">
                        <div class="block-title text-center">
                            <p>Virus Arround the Globe </p><h3>How Virus is Spreading</h3></div>
                            <div class="row0">
                                <div class="col-lg-4 wow fadeInLeft animated" data-wow-animation-duration="1500ms" style={{visibility: "visible", animationName: "fadeInLeft"}}>
                                    <div class="service-one__single">
                                        <div class="service-one__inner">
                                            <div class="service-one__image">
                                                <img src="https://vimns.vercel.app/assets/images/shapes/service-i-1.png" alt=""/></div>
                                                <div class="service-one__content"><h3><a href="#">Close Contact With an Infected Person </a></h3><p> There are many variations of passages of lorem Ipsum but the available majority. </p><a href="#" class="service-one__link"><i class="vimns-icon-front"></i></a></div></div></div></div>
                                                <div class="col-lg-4 wow fadeInUp animated" data-wow-animation-duration="1500ms" style={{visibility: "visible", animationName: "fadeInUp"}}>
                                                    <div class="service-one__single"><div class="service-one__inner">
                                                    <div class="service-one__image">
                                                        <img src="https://vimns.vercel.app/assets/images/shapes/service-i-2.png" alt=""/></div>
                                                        <div class="service-one__content"><h3><a href="#">Close Contact With an Infected Person </a></h3><p> There are many variations of passages of lorem Ipsum but the available majority. </p><a href="#" class="service-one__link"><i class="vimns-icon-front"></i></a></div></div></div></div>
                                                        <div class="col-lg-4 wow fadeInRight animated" data-wow-animation-duration="1500ms" style={{visibility: "visible", animationName: "fadeInRight"}}>
                                                            <div class="service-one__single"><div class="service-one__inner"><div class="service-one__image">
                                                            <img src="https://vimns.vercel.app/assets/images/shapes/service-i-3.png" alt=""/></div>
                                                            <div class="service-one__content"><h3><a href="#">Close Contact With an Infected Person </a></h3><p> There are many variations of passages of lorem Ipsum but the available majority. </p><a href="#" class="service-one__link"><i class="vimns-icon-front"></i></a></div></div></div></div></div></div></section>

                                                           
                                                           
                                                           
                                                           
                                                           
                                                           
 <section class="funfact-one"><div class="container">
<img src="	https://vimns.vercel.app/assets/images/shapes/funfact-virus-1-1.png" class="funfact-one__virus-1"  style={{ animationDelay: "250ms"}}alt=""/>
<img src="https://vimns.vercel.app/assets/images/shapes/funfact-virus-1-2.png" class="funfact-one__virus-2" alt=""/>
<h3><span class="counter">4,689,800</span></h3><p>People are Infected by this Virus</p></div></section>





{/* 
<section class="prevention-one prevention-one__home-1">
<div class="container"><div class="row1"><div class="col-lg-6">
<div class="prevention-one__box"><div class="prevention-one__box-top">
<h3>Things You Should Do</h3></div><div class="prevention-one__box-bottom">
<div class="prevention-one__single"><div class="prevention-one__icon">
    <div class="prevention-one__icon-inner">
        <img src="https://vimns.vercel.app/assets/images/shapes/should-do-i-1-1.png" alt=""/></div></div>
<div class="prevention-one__content">
<h3>Wash Your Hands 20 Seconds </h3><p>There are many of passages of lorem Ipsum but the available majority.</p></div></div><div class="prevention-one__single">
<div class="prevention-one__icon">
<div class="prevention-one__icon-inner">
    <img src="https://vimns.vercel.app/assets/images/shapes/should-do-i-1-2.png" alt=""/></div></div>
<div class="prevention-one__content"><h3>Wash Your Hands 20 Seconds </h3><p>There are many of passages of lorem Ipsum but the available majority.</p></div></div><div class="prevention-one__single"><div class="prevention-one__icon"><div class="prevention-one__icon-inner">
    <img src="https://vimns.vercel.app/assets/images/shapes/should-do-i-1-3.png" alt=""/></div></div><div class="prevention-one__content"><h3>Wash Your Hands 20 Seconds </h3><p>There are many of passages of lorem Ipsum but the available majority.</p></div></div><div class="prevention-one__single"><div class="prevention-one__icon">
        <div class="prevention-one__icon-inner">
            <img src="	https://vimns.vercel.app/assets/images/shapes/should-do-i-1-4.png" alt=""/></div></div><div class="prevention-one__content"><h3>Wash Your Hands 20 Seconds </h3><p>There are many of passages of lorem Ipsum but the available majority.</p></div></div></div></div></div><div class="col-lg-6">
                <div class="prevention-one__box"><div class="prevention-one__box-top">
                    <h3>Things You Shouldn't Do</h3></div>
                    <div class="prevention-one__box-bottom">
                        <div class="prevention-one__single">
                            <div class="prevention-one__icon">
                                <div class="prevention-one__icon-inner">
                                    <img src="https://vimns.vercel.app/assets/images/shapes/should-no-i-1-1.png" alt=""/></div></div>
                                    <div class="prevention-one__content"><h3>Wash Your Hands 20 Seconds </h3><p>There are many of passages of lorem Ipsum but the available majority.</p></div></div><div class="prevention-one__single"><div class="prevention-one__icon"><div class="prevention-one__icon-inner">
                                        <img src="https://vimns.vercel.app/assets/images/shapes/should-no-i-1-2.png" alt=""/></div></div>
                                        <div class="prevention-one__content"><h3>Wash Your Hands 20 Seconds </h3>
                                        <p>There are many of passages of lorem Ipsum but the available majority.</p></div></div><div class="prevention-one__single"><div class="prevention-one__icon"><div class="prevention-one__icon-inner">
                                            <img src="https://vimns.vercel.app/assets/images/shapes/should-no-i-1-3.png" alt=""/></div></div>
                                        <div class="prevention-one__content"><h3>Wash Your Hands 20 Seconds </h3><p>There are many of passages of lorem Ipsum but the available majority.</p></div></div><div class="prevention-one__single"><div class="prevention-one__icon">
                                            <div class="prevention-one__icon-inner">
                                                <img src="https://vimns.vercel.app/assets/images/shapes/should-no-i-1-4.png" alt=""/></div></div>
                                            <div class="prevention-one__content"><h3>Wash Your Hands 20 Seconds </h3><p>There are many of passages of lorem Ipsum but the available majority.</p></div></div></div></div></div></div></div></section> */}




                                            <section class="cta-two wow fadeInUp animated" data-wow-animation-duration="1500ms" style={{backgroundImage: "url(https://vimns.vercel.app/assets/images/background/cta-bg-1-1.jpg)", visibility: "visible", animationName: "fadeInUp"}}>
                                                <div class="container"><h3>It’s Our Government Job to Project <br/>Themselves And Others</h3>
                                                <a class="thm-btn cta-two__btn" href="/contact">Contact With Us</a></div>
                                                 <Tilt >
                                                <div> <img src="https://vimns.vercel.app/assets/images/shapes/virus-shape-1-2.png" class="brand-one__shape" alt=""></img></div>
                                                 </Tilt>

                                                
                                                </section>



                                                <section class="faq-one faq-one__home-one">
                                                    <img src="https://vimns.vercel.app/assets/images/shapes/virus-shape-1-3.png" class="faq-one__virus" alt=""/>
                                                    <div class="container"><div class="row2"><div class="col-lg-5">
                                                        <div class="faq-one__block"><div class="block-title text-left"><p>Frequently Asked Questions </p>
                                                        <h3>Have any question?</h3></div>
                                                        <p>There are many variations of passages of available but majority have alteration in some by inject humour or <br/> random words.</p>
                                                        <img src="https://vimns.vercel.app/assets/images/resources/faq-1-1.jpg" alt=""/></div></div><div class="col-lg-7">
                                                            <div class="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
                                                                <div class="accrodion active"><div class="accrodion-title">
                                                                    <h4>What Are The Coronavirus Symptoms?</h4></div>
                                                                    <div class="accrodion-content" style={{display: "block"}}><div class="inner">
                                                                        <p>There are many variations of passages of available but majority have alteration in some by inject humour or random . </p></div></div></div>
                                                <div class="accrodion "><div class="accrodion-title">
                                                    <h4>Why We Should Stay At Home?</h4></div><div class="accrodion-content" style={{display: "none"}}>
                                                        <div class="inner">
                                                            <p>There are many variations of passages of available but majority have alteration in some by inject humour or random . </p></div></div></div><div class="accrodion "><div class="accrodion-title">
                                                                <h4>COVID-19 Illness can Affect Your Lungs?</h4></div>
                                                                <div class="accrodion-content" style={{display: "none"}}><div class="inner">
                                                                    <p>There are many variations of passages of available but majority have alteration in some by inject humour or random . </p></div></div></div><div class="accrodion "><div class="accrodion-title"><h4>Find Out How We Are Monitoring Corona?</h4></div><div class="accrodion-content" style={{display: "none"}}>
                                                                        <div class="inner">
                                                                            <p>There are many variations of passages of available but majority have alteration in some by inject humour or random . </p></div></div></div></div></div></div></div></section>




                                                                            <section class="blog-one blog-one__home"><div class="container">
                                                                                <div class="block-title text-center"><p>List of All Preventions </p><h3>Checkout Our Main Precaution</h3></div>
                                                                                <div class="row3"><div class="col-lg-4 wow fadeInLeft animated" data-wow-animation-duration="1500ms" data-wow-animation-delay="000ms" style={{visibility: "visible", animationName: "fadeInLeft"}}>
                                                                                    <div class="blog-one__single"><div class="blog-one__single-inner">
                                                                                        <div class="blog-one__image"><a href="/news-details">+</a>
                                                                                        <img src="https://vimns.vercel.app/assets/images/blog/blog-1-1.jpg" alt=""/></div><div class="blog-one__content">
                                                                                            <ul class="blog-one__meta list-unstyled"><li><a href="#">22 Mar, 2020</a></li>
                                                                                            <li><a href="#">2 Comments</a></li></ul>
                                                                                            <h3><a href="/news-details">Can Face Mask protect me From Coronavirus?</a></h3></div></div></div></div>
                                                                                            <div class="col-lg-4 wow fadeInUp animated" data-wow-animation-duration="1500ms" data-wow-animation-delay="100ms" style={{visibility: "visible", animationName: "fadeInUp"}}><div class="blog-one__single">
                                                                                                <div class="blog-one__single-inner"><div class="blog-one__image">
                                                                                                    <a href="/news-details">+</a><img src="https://vimns.vercel.app/assets/images/blog/blog-1-2.jpg" alt=""/></div>
                                                                                                    <div class="blog-one__content"><ul class="blog-one__meta list-unstyled"><li><a href="#">22 Mar, 2020</a></li>
                                                                                                    <li><a href="#">2 Comments</a></li></ul><h3><a href="/news-details">Even dead cats bounce. Throughput. Hit the</a></h3></div></div></div></div>
                                                                                                    <div class="col-lg-4 wow fadeInRight animated" data-wow-animation-duration="1500ms" data-wow-animation-delay="200ms" style={{visibility: "visible", animationName: "fadeInRight"}}><div class="blog-one__single">
                                                                                <div class="blog-one__single-inner">
                                                                                    <div class="blog-one__image"><a href="/news-details">+</a>
                                                                                    <img src="	https://vimns.vercel.app/assets/images/blog/blog-1-3.jpg" alt=""/></div><div class="blog-one__content">
                                                                                        <ul class="blog-one__meta list-unstyled"><li><a href="#">22 Mar, 2020</a></li>
                                                                                        <li><a href="#">2 Comments</a></li></ul><h3><a href="/news-details">Highlights window-licker touch base. This medium</a></h3></div></div></div></div></div></div></section>












     {/* <Footer/> */}

     {/* <section class="contact-info-one">
        <div class="container">
          <div class="inner-container"><div class="contact-info-one__icon">
            <i class="vimns-icon-phone"></i></div>
            <div class="contact-info-one__content"><div class="contact-info-one__box">
              <div class="contact-info-one__box-inner"><h3>Visit Hospital</h3>
                <p>855 Road Broklyn Street, USA</p></div></div><div class="contact-info-one__box">
                <div class="contact-info-one__box-inner"><h3>Call Now</h3><p>
                  <a href="tel:666-888-0000">+216272793044</a></p></div></div><div class="contact-info-one__box">
                <div class="contact-info-one__box-inner"><h3>Send Email</h3><p>
                  <a href="mailto:info@vimns.com">arem.atoui@isimg.tn</a></p></div></div></div></div></div></section> */}
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" class="google-map__contact" allowfullscreen=""></iframe> */}

      <div><a href="#" data-target="html" class="scroll-to-target scroll-to-top" style={{ display: "block" }}>
        <i class="fa fa-angle-up"><fa6 FaAngleUp></fa6></i></a><div class="side-menu__block">
          <div class="side-menu__block-overlay custom-cursor__overlay">
            <div class="cursor" style={{ top: "221px", left: "1017px" }}>
            </div><div class="cursor-follower" style={{ top: "199px", left: "995px" }}>
            </div></div>
          <div class="side-menu__block-inner  mCustomScrollbar _mCS_1">
            <div id="mCSB_1" class="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside" tabindex="0"
              style={{ maxHeight: "none" }}><div id="mCSB_1_container" class="mCSB_container"
                style={{ position: "relative", top: "0", left: "0", dir: "ltr" }}><div class="side-menu__top justify-content-end">
                  <a href="#" class="side-menu__toggler side-menu__close-btn">
                    <img src="/assets/images/shapes/close-1-1.png" alt="" class="mCS_img_loaded" /></a></div>
                <nav class="mobile-nav__container"><ul class=" main-nav__navigation-box"><li class="dropdown">
                  <a href="/">Home<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></a>
                  <ul><li><a href="/">Home 01</a></li><li><a href="/index-2">Home 02</a></li><li class="dropdown">
                    <a href="#">Header Styles<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></a>
                    <ul><li><a href="/">Header 01</a></li><li>
                      <a href="/index-2">Header 02</a></li></ul></li><li class="dropdown">
                      <a href="#">Dark Styles<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></a>
                      <ul><li><a href="/index-dark">Dark 01</a></li><li><a href="/index-dark-2">Dark 02</a>
                      </li></ul></li></ul></li><li><a href="/about">About</a></li><li><a href="/prevention">Preventions</a>
                  </li><li><a href="/faq">FAQs</a></li><li class="dropdown"><a href="/news">News<button class="dropdown-btn">
                    <i class="fa fa-angle-right"></i></button></a><ul><li><a href="/news">News Page</a></li>
                      <li><a href="/news-details">News Details</a></li></ul></li><li><a href="/contact">Contact</a></li></ul></nav>
                <div class="side-menu__sep"></div><div class="side-menu__content">
                  <p>Lorem Ipsum is simply dummy text the printing and setting industry.
                    Lorm Ipsum has been the industry's stanard dummy text ever. </p><p>
                    <a href="mailto:needhelp@bizkar.com">needhelp@bizkar.com</a> <br />
                    <a href="tel:888-999-0000">888 999 0000</a></p><div class="side-menu__social">
                    <a class="fab fa-facebook-f" href="#"></a><a class="fab fa-twitter" href="#"></a>
                    <a class="fab fa-instagram" href="#"></a><a class="fab fa-pinterest-p" href="#">
                    </a></div></div></div><div id="mCSB_1_scrollbar_vertical"
                      class="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical" style={{ display: "block" }}>
                <div class="mCSB_draggerContainer">
                  <div id="mCSB_1_dragger_vertical" class="mCSB_dragger"
                    style={{ position: "absolute", minHeight: "30px", display: "block", height: "35px", maxHeight: "164px", top: "0px" }}>
                    <div class="mCSB_dragger_bar" style={{ lineHeight: "30px" }}></div></div><div class="mCSB_draggerRail"></div></div>
              </div></div></div></div><footer class="site-footer-one site-footer-one__home-one">
          <div class="site-footer-one__upper"><div class="container"><div class="row"><div class="col-lg-4">
            <div class="footer-widget footer-widget__about"><a href="index.html" class="footer-widget__logo">
              <img width="137" src="https://vimns.vercel.app/assets/images/logo-1-1.png" alt="" /></a>
              <p>Lorem Ipsum is simply dummy text the printing and setting industry.
                Lorm Ipsum has been the text ever.</p></div></div><div class="col-lg-3"><div class="footer-widget footer-widget__links"><h3 class="footer-widget__title">Explore</h3><div class="footer-widget__links-wrap">
                  <ul class="list-unstyled footer-widget__links-list" style={{textDecoration:"none"}}>
                    <li><a href="/about">About</a></li><li><a href="/">Doctors</a></li><li>
                      <a href="/prevention">Prevention</a></li><li><a href="/contact">Contact</a></li></ul>
                      <ul class="list-unstyled footer-widget__links-list" style={{textDecoration:"none"}}><li><a href="/faq">FAQs</a></li><li><a href="/about">Privacy Policy</a></li><li><a href="/about">Terms of Use</a></li></ul></div></div></div><div class="col-lg-3"><div class="footer-widget footer-widget__contact">
                        <h3 class="footer-widget__title">Contact</h3><p><a href="tel:888-999-0000">888 999 0000</a></p><p><a href="mailto:needhelp@vimns.com">needhelp@vimns.com</a></p>
                        <p>855 road, broklyn street <br /> new york 600</p></div></div><div class="col-lg-2 d-flex"><div class="footer-widget my-auto">
                          <div class="footer-widget__social">
                            <a href="#" ><AiFillFacebook></AiFillFacebook></a>
                            <a href="#" ><AiFillTwitterSquare></AiFillTwitterSquare></a>
                            <a href="#" ><AiFillInstagram></AiFillInstagram></a>
                            {/* <a href="#" class="fab fa-pinterest-p"></a> */}
                          </div></div></div></div></div></div><div class="site-footer-one__bottom"><div class="container">
                            <p>© copyright 2020 by <a href="#">Layerdrops.com</a></p></div></div></footer></div>



    
    </div>
  )
}

export default Home