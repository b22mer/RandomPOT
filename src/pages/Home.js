import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import InputCountState from './InputCountState';
import InputNameStage from './InputNameStage';
import "./Home.css"
import StartButton from '../components/button/StartButton';
const Home = () => {
    const navigate =useNavigate();
    
    return (
        <div className='Home'>
            <Header/>

         
            
            <Routes>
                <Route path={"/"} element={<StartButton/>}/>
                <Route path={"/input"} element={<InputCountState/>}/>
                <Route path={"/count"} element={<InputNameStage/>}/>
            </Routes>
            
        </div>
    );
};

export default Home;