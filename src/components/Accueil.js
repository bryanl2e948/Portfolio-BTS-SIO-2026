import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
    return (
        <div className="p-10 text-center" style={{zIndex: 1 }}>

            <p className="mt-4 text-gray-300">Bonjour je m'appelles</p>
            <h1 className="text-3xl font-bold text-[#6129FF]">Rudy Bryan-Lee AMON</h1>
            <p className="mt-4 text-gray-300">Bienvenue sur mon portfolio !</p>

            <div className="btn-decouvrir animate-bounce">
                <Link to="/About" className="decouvrir">
                    <img
                        className="doigt_bas"
                        src="/doigt_bas-removebg-preview.png"
                        alt="doigt_bas"
                    />
                    <span>Me découvrir !</span>
                </Link>
            </div>


        </div>


    );
}

export default Accueil;
