import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import InputCountState from './InputCountState';
import InputNameStage from './InputNameStage';

const Home = () => {
    return (
        <div className='Home'>
            <Header/>

            <div className='welcome-btn'>
                <button>START</button>
            </div>
            
        

            <Routes>
                <Route path={"/input"} element={<InputCountState/>}/>
                <Route path={"/count"} element={<InputNameStage/>}/>
            </Routes>
            
        </div>
    );
};

export default Home;