import React, { Component } from 'react';
import './header.scss';
import { render } from '@testing-library/react';
import logo from './logotype.png';
import Navigation from './Navigation';
// import UserRoom from './UserRoom';


const UserRoom = (props)=> (
  <div className={props.namecl}>
    <span className="header-room--text">{props.name}</span>
    <a href="#" className="header-room--link">{props.name2}</a>
  </div>
) 

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UsersClass: 'header-room desct',
      UsRoom: [
        {
          name: 'Личній Кабинет',
          UsersClass: 'header-room desct',
          name2: 'Вход'
        }
      ]
    }
  }

  // componentDidMount() {
  //   window.addEventListener( 'resize', () => {
  //     this.forceUpdate
  //   })
  // }
  
  render() {

    let room = null

    if (window.innerWidth >= 800) {
      room = this.state.UsRoom.map((list, index) => {
        return (
          <UserRoom
            key={index}
            namecl={list.UsersClass}
            name={list.name}
            name2={list.name2}
          />
        )
      })
    }


    const {
      UsersClass,
      UsRoom
    } = this.state

    return (
      <div className="header">
        <div className="header-app">
          <a className="header-link" href="#">
            <img src={logo} title="kichkas" alt="kichkas.net" className="heade-logotype" ></img>
          </a>
          <div className="header-news">
            <a href="#" className="header-news--link hover-black">
              Зміна тарифів ОТТ-послуги "Kichkas.TV" від ОмегаТВ
            </a>
            <a href="#" className="header-news--link">
              З 1 листопада 2020 року відбудуться зміни у вартості тарифів ОмегаТВ
            </a>
          </div>
          {room}
        </div>
        <Navigation />
      </div>
    )

  }

}

export default Header;
