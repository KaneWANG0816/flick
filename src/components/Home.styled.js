import styled from "styled-components";
import bg from '../img/NireSeine.jpg'
/*Background image from https://www.pixiv.net/en/artworks/96189985 by NireSeine*/

const StyledHome = styled.div`
    font-family: Garamond;
    background-image: url(${bg});
    margin: 10; 
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    overflow: auto;
`       


const StyledFilter = styled.div`
    text-align: right;

    .icon-menu:hover{
        filter: brightness(1.5);
        cursor: pointer;
    }

    .filter-dropDown{
        position: absolute;
        right: 40px;
        border: 1px #999999 solid;
        border-radius: 10px;
        background-color: rgb(0,0,0,0.7);
        text-align: left;
        overflow: hidden;
        z-index: 9;
        width: 250px;
    }
    .choice{
        padding: 10px 0;
        justify-content: space-between;
        display: flex;
        width: 80%;
        margin: 0 auto;
    }
    .label{
        font-size: 18px;
    }
    .select{
        position: relative;
        min-width: 120px;
        padding: 3px 0;
        width: 70%;
        border: 1px solid #E8EAED;
        border-radius: 24px;
        background: white;
        box-shadow: 0 1px 3px -2px #9098A9;
        cursor: pointer;
        font-family: inherit;
        font-size: 16px;
        transition: all 150ms ease;
        :focus{
            outline: none;
            border-color: #0077FF;
            box-shadow: 0 0 0 2px rgba(#0077FF,.2);
        }
    }

    option{
        text-align: center;
        color: #4d4d4d;
    }

    .code{
        text-align: center;
        font-family: inherit;
        display: inline-block;
        height: 16px;
        padding: 3px 0;
        width: 70%;
        font-size: 16px;
        font-weight: 400;
        color: #bfbfbf;
        background-color: #fff;
        background-clip: padding-box;
        appearance: none;
        border-radius: 24px;
        :focus{
            color: #212529;
            background-color: #fff;
            border-color: #86b7fe;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
        }
    }

`
const StyledWelcome = styled.div`
    text-align: center;

    .welcome-header{
        display: block;
        font-size: 42px;
        margin-top: 12vh;
        position: relative;
        color: white;
    }

    .break{
        display: block;
        width: 75vw;
        color: white;
        border-top: 1px solid white;
     
    }

    .welcome-message{
        font-size: 18px;
        display: block;
        color: white;
    }
`

const StyledGo = styled.div`
    text-align: center;
    margin-top: 8vh;
    .happy{
        display: inline-block;
        color: white;
        padding: 0 15px;
        font-size: 36px;
    }

    .go-name{
        font-family: inherit;
        display: inline-block;
        height: 36px;
        padding: 0 15px;
        font-size: 16px;
        font-weight: 400;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        appearance: none;
        border-radius: 24px;
        :focus{
            color: #212529;
            background-color: #fff;
            border-color: #86b7fe;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
        }
        
    }
        
    .btn-go {
        align-items: center;
        appearance: none;
        background-color: #fff;
        border-radius: 24px;
        border-style: none;
        box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
        box-sizing: border-box;
        color: #3c4043;
        cursor: pointer;
        display: inline-flex;
        fill: currentcolor;
        font-family: "Google Sans",Roboto,Arial,sans-serif;
        font-size: 14px;
        font-weight: 500;
        height: 36px;
        justify-content: center;
        letter-spacing: .25px;
        line-height: normal;
        max-width: 100%;
        overflow: visible;
        padding: 2px 24px;
        position: relative;
        text-align: center;
        text-transform: none;
        transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: auto;
        will-change: transform,opacity;
        z-index: 0;
    }
    
    .btn-go:hover {
        background: #F6F9FE;
        color: #174ea6;
    }
    
    .btn-go:active {
        box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
        outline: none;
    }
    
    .btn-go:focus {
        outline: none;
        border: 2px solid #4285f4;
    }
    
    .btn-go:not(:disabled) {
        box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }
    
    .btn-go:not(:disabled):hover {
        box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
    }
    
    .btn-go:not(:disabled):focus {
        box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }
    
    .btn-go:not(:disabled):active {
        box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
    }
    
    .btn-go:disabled {
        box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }
`

const StyledPair = styled.div`
    .overlap{
        z-index: 9;
        position: fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color: black;
        opacity:0.85;
    }

    .pair{
        position: absolute;
        right: 35vw;
        top: 35vh;
        display: block;
        z-index: 99;
        height: 30vh;
        width: 30vw;
        border-radius: 24px;
    }

    .cancel {
        width: 100%;
        text-align: right;
    }

    .btn-cancel:hover{
        cursor: pointer;
    }
        
    .reminder{
        text-align: center;
        display: block;
    }

`

const StyledLoader = styled.div`
    text-align: center;
    display: flex;
    animation: tiltSpin 8s linear infinite;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 12em;
    transform-style: preserve-3d;

    .preloader__ring {
    transform-style: preserve-3d;
    animation-name: spin;
    animation-duration: 4s;
    animation-timing-function: inherit;
    animation-iteration-count: inherit;
    font-size: 2em;
    position: relative;
    height: 3rem;
    width: 1.5rem;
    }
    .preloader__ring:nth-child(even) {
    animation-direction: reverse;
    }
    .preloader__sector {
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    text-transform: uppercase;
    transform: translateZ(7rem);
    }
    .preloader__sector, .preloader__sector:empty:before {
    display: inline-block;
    width: 100%;
    height: 100%;
    }
    .preloader__sector:empty:before {
    background: linear-gradient(transparent 45%, currentColor 45% 55%, transparent 55%);
    content: "";
    }
    .preloader__sector:nth-child(2) {
    transform: rotateY(12deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(3) {
    transform: rotateY(24deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(4) {
    transform: rotateY(36deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(5) {
    transform: rotateY(48deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(6) {
    transform: rotateY(60deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(7) {
    transform: rotateY(72deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(8) {
    transform: rotateY(84deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(9) {
    transform: rotateY(96deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(10) {
    transform: rotateY(108deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(11) {
    transform: rotateY(120deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(12) {
    transform: rotateY(132deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(13) {
    transform: rotateY(144deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(14) {
    transform: rotateY(156deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(15) {
    transform: rotateY(168deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(16) {
    transform: rotateY(180deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(17) {
    transform: rotateY(192deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(18) {
    transform: rotateY(204deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(19) {
    transform: rotateY(216deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(20) {
    transform: rotateY(228deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(21) {
    transform: rotateY(240deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(22) {
    transform: rotateY(252deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(23) {
    transform: rotateY(264deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(24) {
    transform: rotateY(276deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(25) {
    transform: rotateY(288deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(26) {
    transform: rotateY(300deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(27) {
    transform: rotateY(312deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(28) {
    transform: rotateY(324deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(29) {
    transform: rotateY(336deg) translateZ(7rem);
    }
    .preloader__sector:nth-child(30) {
    transform: rotateY(348deg) translateZ(7rem);
    }

    /* Animations */
    @keyframes tiltSpin {
    from {
        transform: rotateY(0) rotateX(30deg);
    }
    to {
        transform: rotateY(1turn) rotateX(30deg);
    }
    }
    @keyframes spin {
    from {
        transform: rotateY(0);
    }
    to {
        transform: rotateY(1turn);
    }
    }
`

const StyledStatus = styled.div`
    text-align: center;
    padding: 6vh;
    color: #bfbfb   f;
    .status-dot{
        
    }
`

const StyledFooter = styled.div`
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    margin: 0 auto;

    .disclaim{
        color: #bfbfbf;
    }
`

const StyledLoad = styled.div`

`

export {StyledFooter, StyledFilter, StyledGo, StyledPair, StyledLoader, StyledLoad, StyledStatus, StyledWelcome, StyledHome}