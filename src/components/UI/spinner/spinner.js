import React from 'react'

function Spinner() {
    return (
        <div className="lds-ellipsis flex flex-col w-full h-screen justify-center align-middle items-center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner