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
        // return next();
    };

    const next = () => {
        const box = getBox();
        const width = box.clientWidth;
        // console.log("next width: " + box.clientWidth)
        box.scrollLeft = box.scrollLeft + width;
    };



  return (
    <>
    <body>

    
    <div className="Carousle">
    <div className="Review">
        <h2>Let's see what our clients says</h2>
    </div>
        <div className="between">
            <button className="prev" onClick={prev}>
                👈
            </button>
        <div className="CarousleContainer">

            <div className="CarousleItem">
                <div className="List">
                    <h1>Mikel</h1>
                    <p>Only natural ingredients, grown and produced in the village , with care and love for out health, love and longevity ! I always choose only you, I have never regretted it!</p>
                    ⭐⭐⭐⭐⭐⭐
                    <p>1</p>
                </div>
            </div>

            <div className="CarousleItem">
                <div className="List">
                <h1>Bradon</h1>
                    <p>Only natural ingredients, grown and produced in the village , with care and love for out health, love and longevity ! I always choose only you, I have never regretted it!</p>
                    ⭐⭐⭐⭐⭐⭐
                    <p>2</p>
                </div>
            </div>

            <div className="CarousleItem">
                <div className="List">
                <h1>Carlsen</h1>
                    <p>Only natural ingredients, grown and produced in the village , with care and love for out health, love and longevity ! I always choose only you, I have never regretted it!</p>
                    ⭐⭐⭐⭐⭐⭐
                    <p>3</p>
                </div>
            </div>

            <div className="CarousleItem">
                <div className="List">
                <h1>John</h1>
                    <p>Only natural ingredients, grown and produced in the village , with care and love for out health, love and longevity ! I always choose only you, I have never regretted it!</p>
                    ⭐⭐⭐⭐⭐⭐
                    <p>4</p>
                </div>
            </div>
            <div className="CarousleItem">
                <div className="List">
                <h1>Ronnet</h1>
                    <p>Only natural ingredients, grown and produced in the village , with care and love for out health, love and longevity ! I always choose only you, I have never regretted it!</p>
                    ⭐⭐⭐⭐⭐⭐
                    <p>5</p>
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