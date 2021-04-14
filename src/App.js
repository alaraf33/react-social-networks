import React from 'react';

import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Setings from "./componets/Setings/Setings";
import s from "./componets/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music} />
                    <Route path='/setings' component={Setings} />
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
