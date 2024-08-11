/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import nykaa from "../assets/sliderImages/nykaa.jpg"
import colorpop from "../assets/sliderImages/colorpop.gif"
import eyeliner from "../assets/sliderImages/eyeliner.jpg"
import all from "../assets/sliderImages/all.jpg"
import all1 from "../assets/sliderImages/all2.gif"
import styled from 'styled-components';
import { small } from '../responsive';

const SliderDiv=styled.div`
${small({display:"none"})}
`
export default function Slider() {
  
    return (
        <SliderDiv >
            <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
                <div>
                <img height="300rem" style={{objectFit:"cover"}} src={all} />
                </div>
                 <div>
                 <img height="300rem" style={{objectFit:"cover"}} src={nykaa} />
                </div>
                <div>
                <img height="300rem" style={{objectFit:"cover"}} src={colorpop} />
                </div>
                <div>
                <img height="300rem" style={{objectFit:"cover"}} src={eyeliner} />
                </div>
                <div>
                <img height="300rem" style={{objectFit:"cover"}} src={all1} />
                </div>
            </Carousel>
        </SliderDiv>
    )
}
