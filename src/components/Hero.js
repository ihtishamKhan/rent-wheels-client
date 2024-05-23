import React from 'react'
import heroImage from "../assets/hero.jpg"

function Hero() {
    return (
        <div>

            <img src={heroImage}
                width={"100%"}
                alt='Hero'
                height={"600px"}
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
                className='w-100'
            />
        </div>
    )
}

export default Hero