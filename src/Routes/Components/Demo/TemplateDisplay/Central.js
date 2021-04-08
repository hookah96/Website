import React from 'react';
import '../../../css/TemplateDisplayCentral.css';
// import { Link } from 'react-router-dom';  
import AOS from 'aos';
import 'aos/dist/aos.css';

import TempJ1 from './imgs/temp-j1.png';
import TempMa1 from './imgs/temp-ma1.png';
import TempY1 from './imgs/temp-y1.png';
import TempY2 from './imgs/temp-y2.png';
import TempB1 from './imgs/temp-b1.png';
import TempMu1 from './imgs/temp-mu1.png';
import TempJ2 from './imgs/temp-j2.png';

import TempJ3 from './imgs/temp-j3.png';
import TempB2 from './imgs/temp-b2.png';
import TempY3 from './imgs/temp-y3.png';
import TempMu2 from './imgs/temp-mu2.png';
import TempMa2 from './imgs/rp_1.png';

function Central() {
  return (
    <div>
      <DisplayRes />
      <DisplayResAni />
    </div>
  );
}

// Hey Guys I made some new changes in this section.
function Web_home_Page() {
  return (
    <div className="Web_home_Page_Section">
      <h1 className="Web_home_Page_h1">Your in the right location: </h1>
      <Web_hero_Page />
    </div>
  );
}

function Web_hero_Page() {
  return (
    <>
      <div className="Web_home_second_hero">
        <h2 className="Web_home_second_hero_H1">Welcome </h2>
        <h4 className="Web_home_Page_h2">
          Here, we offer you the findness, simple and excellent resume templates
          that you can find in the internet, and use for all you job searches.{" "}
          <br />
          We're wishing you GoodLuck on your job search after selecting one of
          the resumes tha'ts matchest your need!
        </h4>
      </div>
      <Jump_to_next_page />
    </>
  );
}

function Jump_to_next_page() {
  return (
    <div>
      <div className="jump_to_next_page">
        <sup>&darr;</sup>
      </div>
      <a href="#section_1" className="jump_to_next_page_button">
        <span className="jump_to_next_page_span">See now</span>
      </a>
    </div>
  );
}

function DisplayRes() {
  return (
    <section className="JaTDCentral">
      <div className="JATDCentralContainer">
        <Web_home_Page />
        <div className="JATDCentralContent">
          <DisplayTemp
            img={TempJ1}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />
          <DisplayTemp
            img={TempMa1}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />
          <DisplayTemp
            img={TempY1}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />
          <DisplayTemp
            img={TempY2}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />
          <DisplayTemp
            img={TempB1}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />
          <DisplayTemp
            img={TempMu1}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />
          <DisplayTemp
            img={TempJ2}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />

function DisplayRes(){
  return(
    <section className='JaTDCentral'>
      <div className='JATDCentralContainer'>
        <p className='JaTempDisplayText'>
          Here, we offer you the findness, simple and excellent resume templates that you can find in the internet, and use for all you job searches. <br />
          We're wishing you GoodLuck on your job search after selecting one of the resumes tha'ts matches your need!
        </p>
        <div className='JATDCentralContent'>
          <a href='/templateJ1' id='JaTAniTag'><DisplayTemp img={TempJ1}
          // path='templateJ1'
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
          <a href='/templateMa1' id='JaTAniTag'><DisplayTemp img={TempMa1}
          // path='templateMa1'
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
          <a href='/templateY1' id='JaTAniTag'><DisplayTemp img={TempY1}
          // path='templateY1'
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
          <a href='/templateY2' id='JaTAniTag'><DisplayTemp img={TempY2}
          // path='templateY2'
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
          <a href='/templateB1' id='JaTAniTag'><DisplayTemp img={TempB1}
          // path='templateB1'
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
          <a href='/templateMu1' id='JaTAniTag'><DisplayTemp img={TempMu1}
          // path='templateMu1'
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
          <a href='/templateJ2' id='JaTAniTag'><DisplayTemp img={TempJ2}
          // path='templateJ2'
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
        </div>
      </div>
    </section>
  );
}

function DisplayTemp({ img, heading, paragph }) {
  return (
    <div className="JATDcentralSection">
      <a href="">
        {/* /templateJ1 */}
        <div className="JaDTemplateIamge">
          <img src={img} alt="" />
        </div>
      </a>
      <h3 className="JaDTemplateHead">{heading}</h3>
      <p className="JaDTemplateText">{paragph}</p>
=======
function DisplayTemp (props) {
  AOS.init({
    offset: 300,
    duration: 1000
  })
  
  return(
    <div className='JATDcentralSection'>
      {/* <Link to={props.path}> */}
        <div className='JaDTemplateIamge' data-aos="fade-in">
          <img src={props.img} alt='' />
        </div>
      {/* </Link> */}
      <h3 className='JaDTemplateHead'>{props.heading}</h3>
      <p className='JaDTemplateText'>{props.paragph}</p>
    </div>
  );
}

function DisplayResAni() {
  return (
    <section id="section_1" className="JaTAniCentral">
      <div className="JaTAniCentralContainer">
        <p className="JaTempDisplayText">
          <span>
            Thank You for scrolling down! And again!
            <br />
          </span>
          Here, we offer you the findness, simple and excellent resume templates
          that you can find in the internet, and use for all you job searches.{" "}
          <br />
          We're wishing you GoodLuck on your job search after selecting one of
          the resumes tha'ts matchest your need!
        </p>
        <div className="JaTAniCentralContent">
          <DisplayAniTemp
            img={TempJ3}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />
          <DisplayAniTemp
            img={TempB2}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />
          <DisplayAniTemp
            img={TempY3}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />
          <DisplayAniTemp
            img={TempMu2}
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />
          <DisplayAniTemp
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfT5VH2ZnqIk34Szx0sKBwgTJef9bAYuOog&usqp=CAU"
            heading="Your Prefered Resume Template"
            paragph="$ git checkout templateDisplay Switched to branch templateDisplay"
          />

function DisplayResAni () {
  return(
    <section className='JaTAniCentral'>
      <div className='JaTAniCentralContainer'>
        <p className='JaTempDisplayText'>
          <span>Thank You for scrolling down! And again!<br /></span>
          Here, you can select the most styled, animated and excellent resume templates that you can find in the internet, and use for all you job searches. <br />
          We're wishing you GoodLuck on your job search after selecting one of the resumes tha'ts matches your need!
        </p>
        <div className='JaTAniCentralContent'>
          <a href='/templateJ3' id='JaTAniTag'><DisplayAniTemp img={TempJ3}
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
          <a href='/templateB2' id='JaTAniTag'><DisplayAniTemp img={TempB2}
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
          <a href='/templateY3' id='JaTAniTag'><DisplayAniTemp img={TempY3}
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
          <a href='/templateMu2' id='JaTAniTag'><DisplayAniTemp img={TempMu2}
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
          <a href='/templateJ2' id='JaTAniTag'><DisplayAniTemp img={TempMa2}
          heading='Your Prefered Resume Template'
          paragph='Just click and fill in your details or you can let one of our team members do it for you.' /></a>
        </div>
        <a href="#" class="scroll-up"><i class="fa fa-angle-double-up"></i></a>
      </div>
    </section>
  );
}

function DisplayAniTemp({ img, heading, paragph }) {
  return (
    <div className="JaTAniSection">
      <a href="">
        {/* /templateJ1 */}
        <div className="JaTAniTemplateIamge">
          <img src={img} alt="" />
        </div>
      </a>
      <h3 className="JaTAniTemplateHead">{heading}</h3>
      <p className="JaTAniTemplateText">{paragph}</p>
function DisplayAniTemp (props) {
  return(
    <div className='JaTAniSection'>
        <div className='JaTAniTemplateIamge' data-aos="fade-down">
          <img src={props.img} alt='' />
        </div>
      <h3 className='JaTAniTemplateHead'>{props.heading}</h3>
      <p className='JaTAniTemplateText'>{props.paragph}</p>
    </div>
  );
}

export default Central;