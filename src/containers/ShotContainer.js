import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import ShotElement from '../components/ShotElement'


function ShotContainer({ pageNumber }) {   

  return (
    <Carousel activeIndex={pageNumber-1}  interval={null} indicators={false} controls={false}>
      <Carousel.Item >
        <ShotElement />
        <ShotElement />
        <ShotElement />
        <ShotElement />
        <ShotElement />
        <ShotElement />
      </Carousel.Item>
      <Carousel.Item>
        <ShotElement />
      </Carousel.Item>
    </Carousel>
    
    );
}

export default ShotContainer