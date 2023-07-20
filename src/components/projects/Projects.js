import React from 'react';
import "./Project.css";
import Slider from "react-slick";

function Projects() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const projects = [
        {pName: "project1", pImg: "SADSA", pDesc: "lorem"},
        {pName: "project1", pImg: "SADSA", pDesc: "lorem"},
        {pName: "project1", pImg: "SADSA", pDesc: "lorem"},
    ]
  return (
    <div className='project-container'>
        <div className='project-padding'>
            <h1>My Projects</h1>
            <div>
                <Slider {...settings}>
                    {projects && projects.map((p) =>
                        <div className='pro-container'>
                            <div className='pro-img'>
                                <img alt="img here"/>
                                <div className='pro-desc'>
                                    this is description
                                </div>
                            </div>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Projects
