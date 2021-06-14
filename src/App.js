import React from 'react';

import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Setings from "./componets/Setings/Setings";
//import s from "./componets/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";
//import {addPost} from "./redax/state";


const App = (props) => {
    debugger;
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs'
                           render ={ () => <Dialogs store={props.store} /> }/>

                    <Route path='/profile'
                                render ={ () => <Profile
                                    profilePage={props.state.profilePage}
                                    dispatch = {props.dispatch} /> } />

                    <Route path='/news' render ={() => <News />} />
                    <Route path='/music' render ={ () => <Music /> } />
                    <Route path='/setings' render ={ () => <Setings />} />

                </div>

            </div>
    );
}

export default App;
