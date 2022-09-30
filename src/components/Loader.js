import React from 'react';

//Gif
import snipper from "../gif/spinner.gif";

const Loader = () => {
    return (
        <div>
            <img src={snipper} alt="Loading" />
            <h1>Loading . . .</h1>
        </div>
    );
};

export default Loader;