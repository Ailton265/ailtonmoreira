import React from 'react'

function About(props) {

    return (
        <div className="w-full h-full flex flex-col items-center align-middle justify-center mx-auto" style={{
            backgroundImage: "url(" + require("../assets/images/bg-water.jpg") + ")",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center'
        }}>
            Welcome to about page
        </div>
    )
}

export default About