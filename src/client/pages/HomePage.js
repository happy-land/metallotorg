import React from 'react';

const Home = () => {
    return (
        <div>
            <div>I'm the !!! home component!</div>
            <button onClick={() => console.log('Привет@@')}>Кнопка</button>
        </div>

    )
};

export default {
    component: Home
};