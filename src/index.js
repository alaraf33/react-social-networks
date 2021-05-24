import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialogs from "./componets/Dialogs/Dialogs";

        let posts = [
                {id: 1, massage: 'Hi, how are you?', likeCount: 12},
                {id: 2, massage: 'Its my first post', likeCount: 11},
                {id: 1, massage: 'you?', likeCount: 12},
                {id: 2, massage: 'first post', likeCount: 11}
            ]

            let dialogs = [
                {id: 1, name: 'Sergio'},
                {id: 2, name: 'Anja'},
                {id: 3, name: 'Jon'},
                {id: 4, name: 'Irina'},
                {id: 5, name: 'Valentina'}
            ]


            let massages = [
                {id: 1, massage: 'Hi'},
                {id: 2, massage: 'How are you?'},
                {id: 3, massage: 'You'},
                {id: 4, massage: 'Yo'},
                {id: 5, massage: 'Yo'}
            ]

ReactDOM.render(
  <React.StrictMode>
        <App posts = {posts} dialogs={dialogs} massages={massages}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
