import React, { useState } from 'react';
import axios from 'axios';

import './Home.scss';

const Home = () => {
    const [msg, setMsg] = useState('');

    const getMessage = () => {
        axios.get('/api/message')
        .then((response) => {
            setMsg(response.data);
        });
    }

    return (
        <div className="home">
            <div className="header">Hola Clase soy Lilia!!"</div>
            <div className="body">Vamos Terminado!</div>

            <button 
                onClick={getMessage}
                className="btn"
            >Click Me</button>
            
            <div className="message">{msg}</div>
        </div>
    );
}

export default Home;
