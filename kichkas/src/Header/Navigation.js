import React, { Component } from 'react';
import './Navigation.scss';
import UserRoom from './UserRoom'



const Nav = (props) => (
  <li className="nav-item">
    <a href={props.url} >
      {props.name}
    </a>
  </li>
)


class Navigation extends Component {



  constructor(props) {

    super(props);
    this.state = {
      isToggleOn: true,
      isToggle2On: true,
      list2ClassName: 'nav-list-under',
      nav: [
        {
          name: 'Главная',
          url: '#'
        },
        {
          name: 'Новости',
          url: '#'
        },
        {
          name: 'О компании',
          url: '#'
        },
        {
          name: 'Услуги',
          url: '#'
        },
        {
          name: 'Телевидение',
          url: '#'
        },
        {
          name: 'Вакансии',
          url: '#'
        },
      ],
      UserClass: 'header-room mobile'
    };

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));

  }
  handleClick2() {
    this.setState(state => ({
      isToggle2On: !state.isToggle2On
    }));
  }


  render() {

    const {
      nav,
      UserClass
    } = this.state


    return (
      <div className="nav">
        <button className={this.state.isToggleOn ? 'burger' : 'burger active'} onClick={this.handleClick}>
          <span className={this.state.isToggleOn ? 'burger-span1' : 'burger-span1 active'}></span>
          <span className={this.state.isToggleOn ? 'burger-span2' : 'burger-span2 active'}></span>
          <span className={this.state.isToggleOn ? 'burger-span3' : 'burger-span3 active'}></span>
        </button>
        <div className={this.state.isToggleOn ? 'aside' : 'aside active'}>
          <ul className="nav-list">
            {this.state.nav.map((list, index) => {
              return (
                <Nav
                  key={index}
                  name={list.name}
                  url={list.url}
                />
              )
            })
            }
          </ul>
          <UserRoom namecl={UserClass} />
        </div>
      </div>
    );
  }
}

export default Navigation;