import React, { Component } from 'react';
import './Rmenu.scss';
import { render } from '@testing-library/react';


const RmenuItem = (props) =>  (
  <li className="rmenu-item">
    <a href={props.url} className="rmenu-link">
      {props.name}
    </a>
  </li>
)

class Rmenu extends Component {

  state = {
    rMenu: [
      {
        rlink: '#',
        rname: 'Интернет'
      },
      {
        rlink: '#',
        rname: 'Об Сетей'
      },
      {
        rlink: '#',
        rname: 'Хостинг'
      }
    ]
  }
  
  render() {

    const {
      rMenu
    } = this.state

    return (
      <div className="rmenu">
        <ul className="rmenu-list">
          {
            rMenu.map((rMenu, index) => {
              return(
                <RmenuItem 
                key={index}
                name={rMenu.rname}
                link={rMenu.rlink}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}









export default Rmenu;