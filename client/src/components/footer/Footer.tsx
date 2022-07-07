import React from 'react'

const Footer = () => {
    return (
        <footer className="flex flex-row justify-center items-center bg-gray-200 h-6 pt-6 pb-6 pl-5 pr-5 shadow">
            <div className="block ml-4 mr-4">
                <div className="text-base capitalize text-black">
                    gedeon nzemba
                </div>
            </div>

            <div className="ml-4 mr-4">
                &#45;
            </div>

            <div>
                <div className="text-base capitalize text-black">
                    &#169; 2022 by SOLINK Power Procurement. 
                </div>
            </div>
        </footer>
    )
}

export default Footer