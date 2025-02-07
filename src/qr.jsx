
import qr from "./assets/qr.png";
import { useState } from "react";

import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Test() {
    const [letter, setLetter] = useState(false);

    const handleLetterClick = () => {
        setLetter(true);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <h1 className="text-4xl md:text-6xl my-4 text-center">
                to proceed, you have to scan the qr code below and paynow me 1000 dollars to proceed
            </h1>
            <img src={qr} alt="like this guy" />
            
            <button 
                onClick={handleLetterClick}
                className="bg-pink-100 p-8 rounded-lg shadow-lg hover:bg-pink-200 transition-colors"
            >
                <span className="text-4xl">CLICK ME!!!</span>
            </button>

            {letter && (
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl my-4 text-center">
                        u r evil liar evil bl0ke u didnt pay me
                    </h1>
      
                </div>
            )}
        </div>
    );
}