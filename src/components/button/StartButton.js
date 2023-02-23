import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartButton = () => {
    const navigate= useNavigate()
    return (
        <div className='welcome-btn'>
        <button type="button" class="btn btn-dark  btn-lg" onClick={()=>navigate("input")}>S T A R T</button>
    </div>
    );
};

export default StartButton;