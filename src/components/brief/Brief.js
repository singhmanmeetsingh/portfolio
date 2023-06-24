import React from 'react';
import "./Brief.css";

function Brief() {
  return (
    <div className='brief'>
        <div className='brief-padding'>
            <div className='brief-title'>
                <p> I’m a software developer, experienced in React, Node.js and all things web.</p>
            </div>
        </div>
        <div className='p-container'>
            <div class="pendulum">
                <div class="pendulum_box">
                    <div class="ball first"></div>
                    <div class="ball"></div>
                    <div class="ball"></div>
                    <div class="ball"></div>
                    <div class="ball last"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brief
