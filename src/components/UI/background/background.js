import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Particles from 'react-tsparticles'

function Background(props) {

    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        updateMobileStatus();
        window.addEventListener('resize', updateMobileStatus());
    }, [])


    const updateMobileStatus = () => {
        let value = window.innerWidth < 600;
        if (value !== mobile) setMobile({mobile: value});
    };


    const {className} = props;
    /*
    * <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                //params={particlesConfig}
                options={{
                    fpsLimit: 150,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
    * */
    return (
        <Particles
            id="tsparticles"
            className={className}
            options={{
                //fpsLimit: 240,
                particles: {
                    links: {
                        enable: true,
                        distance: 100,
                        opacity: 0.5,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: mobile ? 30 : 55,
                    },
                    size: {
                        value: 3,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    opacity: {
                        value: 0.5,
                    },
                },
                interactivity: {
                    detectsOn: 'window',
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                            parallax: {
                                enable: true,
                                force: 100,
                                smooth: 10,
                            },
                        },
                        onHover: {
                            enable: true,
                            mode: 'bubble',
                            parallax: {
                                enable: true,
                                force: 100,
                                smooth: 10,
                            },
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 250,
                            duration: 2,
                            opacity: 0.75,
                            size: 6,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 250,
                            duration: 2,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}


const StyledBackground = styled(Background)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  //background: #1b1b1b;
  //z-index: 999999999;
`;

export default StyledBackground

