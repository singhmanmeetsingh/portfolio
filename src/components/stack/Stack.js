import React from 'react';
import "./Stack.css";

function Stack() {
  return (
    <div className='stack'>
      <div className='stack-pad'>
        <h2 className='stack-heading'>My Stack...</h2>
        <div className='stack-container stack-heading'>
            <div className='stack-block'>
                this is stack block
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stack
