import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";

const Wrapper = styled.div`
  .header--centered {
    position: absolute;
    top: 74%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #CVYusufTemp-btnBack {
    cursor: pointer;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    width: 150px;
    background-color: burlywood;
  }
  .CVYusufTemp-btnPDF {
    background-color: transparent;
    padding: .3rem 2rem;
    position: relative;
    margin-top:1%;
    text-transform: uppercase;
    font-size: 1.4rem;
    color: #7d6569;
    font-weight: 200;
    letter-spacing: 0.2rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s ease-out;
    @media only screen and (max-width: 45em) {
      font-size: 1rem;
    }
  }
  .CVYusufTemp-btnPDF:hover:enabled::before {
    height: 80%;
    border-top: none;
    border-bottom: none;
    border-left: 0.2rem solid #e84545;
  }
  .CVYusufTemp-btnPDF:hover:enabled::after {
    transform: scale(1);
    background: none;
    opacity: 1;
    border: 10px solid #8f8d20;
    animation: removeBorder 1s forwards;
  }
  .CVYusufTemp-btnPDF::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    transition: all 0.2s ease-out;
    border-left: 0.5rem solid #7d6569;
  }
  .CVYusufTemp-btnPDF::after {
    content: "";
    opacity: 0;
    background-color: #e84545;
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.2s ease-out;
  }
`;

class home extends Component {
 
  render() {
    return (
      <Wrapper>
       
         <button id="CVYusufTemp-btnBack" onClick={() => {window.location.href="/templates"}}>
           <i className="fas fa-arrow-circle-left"></i>&nbsp; Back to Templates</button>  

        <iframe className="iframeV"
          title="video about me"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UwsrzCVZAb8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Header />
  
        <button className="CVYusufTemp-btnPDF">Download PDF</button>        
                  
      </Wrapper>
    );
  }
}

export default home;
