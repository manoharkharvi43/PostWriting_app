import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post_Card from './Components/PostCard';
import New_Post from './Components/New_Post';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <>

    {/* <Post_Card/> */}
    <BrowserRouter>
    <App />
    {/* <New_Post/> */}
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
