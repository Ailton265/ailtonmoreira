import React from 'react'
import {withTranslation, Trans} from 'react-i18next';
import {Button} from 'aida-ui'
import perfil from './assets/perfil.jpg'

function App(props) {

    const {t, i18n} = props;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div
            className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 bg-local flex flex-col mx-auto items-center justify-center align-middle">

            <p className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer mx-4 p-2 rounded-lg">
                {`${t('welcome')}`}
            </p>

            <div className="mx-auto w-48 h-auto my-10">
                <img src={perfil} alt={"Logo"}/>
            </div>

            <div
                className="my-2 animate-bounce hover:animate-ping text-indigo-500 hover:cursor-pointer capitalize hover:uppercase">
                {`${t('welcome')}`}
            </div>

            <div className={"flex flex-row mx-auto"}>
                <Button label={'PT'} onClick={() => changeLanguage('pt')} variant={'base'} className={"px-4 py-1 mx-4 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"}/>
                <Button label={'EN'} onClick={() => changeLanguage('eng')} variant={'base'} className={"px-4 py-1 mx-4 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"}/>
            </div>

        </div>
    );
}

export default withTranslation('translations')(App);
