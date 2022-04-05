import React from 'react'
import {withTranslation, Trans} from 'react-i18next';
import {Button} from 'aida-ui'
import Particles from "react-tsparticles";
import perfil from './assets/perfil.jpg'
//import particlesConfig from './utils/particlesConfig.json'
function App(props) {

    const {t, i18n} = props

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }


    const particlesInit = (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }

    const particlesLoaded = (container) => {
        console.log(container);
    }

    return (
        <div
            className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 bg-local flex flex-col mx-auto items-center justify-center align-middle"
            style={{
                backgroundImage: "url(" + require("./assets/bg-water.jpg") + ")",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center'
            }}>
            <Particles
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
            <p className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer mx-4 p-2 rounded-lg">
                {`${t('welcome')}`}
            </p>

            <div className="mx-auto w-48 h-96 my-10">
                {/*<img src={perfil} alt={"Logo"}/>*/}
            </div>

            <div
                className="my-2 animate-bounce hover:animate-ping text-indigo-500 hover:cursor-pointer capitalize hover:uppercase">
                {`${t('greats')}`}
            </div>

            <div className={"flex flex-row mx-auto"}>
                <Button label={'PT'} onClick={() => changeLanguage('pt')} variant={'base'}
                        className={"px-4 py-1 mx-4 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"}/>
                <Button label={'EN'} onClick={() => changeLanguage('eng')} variant={'base'}
                        className={"px-4 py-1 mx-4 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"}/>
            </div>

        </div>
    );
}

export default withTranslation('translations')(App);
