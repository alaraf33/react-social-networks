import React from 'react';

import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Setings from "./componets/Setings/Setings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";

//import {addPost} from "./redax/state";


const App = () => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs'
                           render ={ () => <DialogsContainer /> }/>

                    <Route path='/profile/:userId?'
                                render ={ () => <ProfileContainer /> } />

                    <Route path='/users'
                           render ={ () => <UsersContainer /> } />

                    <Route path='/news' render ={() => <News />} />
                    <Route path='/music' render ={ () => <Music /> } />
                    <Route path='/setings' render ={ () => <Setings />} />

                </div>

            </div>
    );
}

export default App;
