import React from 'react'
import perfil from './assets/perfil.jpg'

function App() {
    return (
        <div
            className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 bg-local flex flex-col mx-auto items-center justify-center align-middle">



            <p className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer mx-4 p-2 rounded-lg">
                Welcome to Ailton Moreira web page
            </p>

            <div className="mx-auto w-48 h-auto my-10">
                <img src={perfil} alt={"Logo"} />
            </div>

            <div className="my-2 animate-bounce hover:animate-ping text-indigo-500 hover:cursor-pointer capitalize hover:uppercase">
                Coming very soon....

            </div>


        </div>
    );
}

export default App;
