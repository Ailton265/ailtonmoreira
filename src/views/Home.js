import React from 'react'
import {Button} from "aida-ui";

function Home(props) {
    console.log('Home',props)
    const {t} = props
    return (
        <div className="w-full h-full flex flex-col items-center align-middle justify-center mx-auto">

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
                <Button label={'PT'} onClick={() => props.changeLanguage('pt')} variant={'base'}
                        className={"px-4 py-1 mx-4 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"}/>
                <Button label={'EN'} onClick={() => props.changeLanguage('eng')} variant={'base'}
                        className={"px-4 py-1 mx-4 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"}/>
            </div>
        </div>
    )
}

export default Home