import React, { useRef } from 'react'
import './contact.css';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import {AiFillInstagram}from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaAngleUp } from "react-icons/fa";
// import Footer from './Footer';
import emailjs from 'emailjs-com'
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jdig26m', 'template_4wtcdcm', form.current, 'HEy-cTgaDwwZhB7lE')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
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
{/* <li class="dropdown"><a href="/news">News<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></a></li> */}
    <li><a href="/contact">Contact</a></li></ul></div><div class="main-nav__right"><a class="main-nav__btn" href="/prevention">Prevention</a></div></div></nav>
       </header>
       <section class="page-header"><div class="container">
        <h2>Contact </h2><ul class="thm-breadcrumb list-unstyled"><li>
            <a href="/">Home</a></li><li><span>Contact</span></li
            ></ul></div></section>
     {/* <section class="page-header">
      <div class="container"><h2>About Us</h2>
      <ul class="thm-breadcrumb list-unstyled"><li><a href="/">Home</a></li>
      <li><span>About Us</span></li></ul></div></section> */}
      <div class="contact-bg02">
        <div class="section-title center-align"><p style={{ color: "bleu" }}>Contact With Us</p>
          <h3>Still Have a Question?</h3>
        </div>
        <form ref={form} onSubmit={sendEmail} action="mail.php" method="post" class="contact-form mt-30"><div class="row"><div class="col-lg-6">
          <div class="contact-field p-relative c-name mb-20">
            <input type="text" id="firstn" name="firstn" placeholder="First Name" /></div></div>
          <div class="col-lg-6"><div class="contact-field p-relative c-subject mb-20">
            <input type="text" id="email" name="email" placeholder="Eamil" /></div></div>
          <div class="col-lg-6"><div class="contact-field p-relative c-subject mb-20">
            <input type="text" id="phone" name="phone" placeholder="Phone Number" /></div></div>
          <div class="col-lg-6"><div class="contact-field p-relative c-subject mb-20">
            <input type="text" id="subject" name="subject" placeholder="Subject" /></div></div>
          <div class="col-lg-12"><div class="contact-field p-relative c-message mb-30">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write Message"></textarea></div>
            <div class="slider-btn"><button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
              <span >Submit Now</span></button></div></div></div></form></div>


      {/* <div class="inner-container">
                        <div class="contact-info-one__icon"><i class="vimns-icon-phone"></i></div>
                      <div class="contact-info-one__content"><div class="contact-info-one__box">
                        <div class="contact-info-one__box-inner"><h3>Visit Hospital</h3><p>855 Road Broklyn Street, USA</p></div></div>
                        <div class="contact-info-one__box"><div class="contact-info-one__box-inner"><h3>Call Now</h3><p>
                          <a href="tel:666-888-0000">666 888 0000</a></p></div></div><div class="contact-info-one__box">
                            <div class="contact-info-one__box-inner">
                        <h3>Send Email</h3><p>
                          <a href="mailto:info@vimns.com">info@vimns.com</a></p></div></div></div></div> 
                      
                      
                       */}



      {/* <section id='contact' >
                       <div class="container page-title text-center"><h2 class="text-center" style={{fontSize: "48px"}}>get <span>in touch</span></h2>
                       <span class="title-head-subtitle">I’m always open to discussing product design work or partnerships.</span></div>
                      
                           <div className="container contact_container">
                             <div className='contact_options'>
                             <article className="contact_option">
                               <MdOutlineMailOutline className='contact_option-icon' style={{color:"#72b626"}}/>
                               <h4>Email</h4>
                               <h5 style={{fontSize:"0.8rem"}}>arem.atoui@isimg.tn</h5>
                               <a href="https://mail.google.com/mail/u/0/?hl=fr#inbox" style={{color:"#72b626"}}>Send a message</a>
                             </article>
                             <article className="contact_option">
                               <BsMessenger  className='contact_option-icon' style={{color:"#72b626"}} />
                               <h4>Messenger</h4>
                               <h5 >Arem Atoui</h5>
                               <a href="https://www.facebook.com/" style={{color:"#72b626"}}>Send a message</a>
                             </article>
                             <article className="contact_option">
                               <BsWhatsapp className='contact_option-icon' style={{color:"#72b626"}}/>
                               <h4>WhatsApp</h4>
                               <h5 >+21627793044</h5>
                               <a href='https://web.whatsapp.com/send?phone=27793044' style={{color:"#72b626"}} >Send a message</a>
                             </article>
                           </div>
                           <form ref={form} onSubmit={sendEmail}>
                             <input type='text' name='name' placeholder='Your Full Name' required/>
                             <input type='email' name='email' placeholder='Your Email' required/>
                             <textarea name='message' placeholder='Your Message' required></textarea>
                             <button className='btn primary' type='submit' style={{background:"#72b626", width:"128px", height: "35px"}}>Send Message</button>
                           </form>
                         </div>
                         </section>  */}


      {/* <Footer/> */}

      <section class="contact-info-one">
        <div class="container">
          <div class="inner-container"><div class="contact-info-one__icon">
            <i class="vimns-icon-phone"></i></div>
            <div class="contact-info-one__content"><div class="contact-info-one__box">
              <div class="contact-info-one__box-inner"><h3>Visit Hospital</h3>
                <p>855 Road Broklyn Street, USA</p></div></div><div class="contact-info-one__box">
                <div class="contact-info-one__box-inner"><h3>Call Now</h3><p>
                  <a href="tel:666-888-0000">+216272793044</a></p></div></div><div class="contact-info-one__box">
                <div class="contact-info-one__box-inner"><h3>Send Email</h3><p>
                  <a href="mailto:info@vimns.com">arem.atoui@isimg.tn</a></p></div></div></div></div></div></section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" class="google-map__contact" allowfullscreen=""></iframe>

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

export default Contact