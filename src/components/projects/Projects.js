import React from 'react';
import "./Project.css";
import Slider from "react-slick";

function Projects() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <div className='project-container'>
        <div className='project-padding'>
            <h1>My Projects</h1>
            <div >
                <Slider {...settings}>
                    <div>
                        <div>
                            <div className='pro-container'>
                                <div className='pro-img'>
                                    <img alt="img here"/>
                                    <div className='pro-desc'>
                                        this is description
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Projects
