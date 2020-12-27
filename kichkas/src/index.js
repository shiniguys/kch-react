import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.scss';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import News from './News/News';
import * as serviceWorker from './serviceWorker';
import Tools from './Tools/Tools';
import Footer from './Footer/Footer';
import Rmenu from './Rmenu/Rmenu';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Tools />
    <Rmenu />
    <Banner />
    <News />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
