import React from 'react'
import './Carousle.css'

const Carousle = () => {

    const getBox = () => {
        return document.querySelector('.CarousleContainer')
    };

    const prev = () => {
        const box = getBox();
        const width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    };

    const next = () => {
        const box = getBox();
        const width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    };



  return (
    <>
    <body>

    
    <div className="Carousle">
    <div className="Review">
        <h2>Let's see client's Review</h2>
    </div>
        <div className="between">
            <button className="prev" onClick={prev}>
                👈
            </button>
        <div className="CarousleContainer">

            <div className="CarousleItem">
                <div className="List">
                    <h1><img src="../Image/Screenshot from 2023-09-28 12-27-00.png" alt="A beautiful sunset" />Mary</h1>
                    <p>Only natural ingredients, grown and produced in the village , with care and love for out health, love and longevity ! I always choose only you, I have never regretted it!</p>
                    ⭐⭐⭐⭐⭐⭐
                </div>
            </div>
            <div className="CarousleItem">
                <div className="List">
                <h1><img src="../Image/Screenshot from 2023-09-28 12-27-29.png" alt=""></img>Courage</h1>
                    <p>Only natural ingredients, grown and produced in the village , with care and love for out health, love and longevity ! I always choose only you, I have never regretted it!</p>
                    ⭐⭐⭐⭐⭐⭐
                </div>
            </div>
        </div>
        <button className="next" onClick={next}>
            👉
        </button>
        </div>
        <div>
           

        </div>

    </div>
    </body>
    </>
  )
};

export default Carousle