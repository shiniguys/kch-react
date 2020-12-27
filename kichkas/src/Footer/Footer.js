import React, { Component } from 'react';
import './Footer.scss';
import { render } from '@testing-library/react';


const FooterList = (props) => (
  <li className={props.cls}>
    {props.name}
  </li>
) 

const RipeNccLink = () => (
  <a href="#" className="footer-ripe--link">

  </a> 
)

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      footerList: [
        {
          name: '69067, Запорожье, ул Тенисная 7',
          className: 'footer-item adress'
        },
        {
          name: 'Info@kichkas.net',
          className: 'footer-item mail'
        },
        {
          name: '(061)284-99-60, 704-18-17',
          className: 'footer-item tell'
        },
        {
          name: '(096)593-33-22 (050)593-33-22',
          className: 'footer-item tell'
        },
        {
          name: '(093)593-33-22',
          className: 'footer-item tell'
        }
      ]
    }
  }

  render() {


    const {
      footerList
    } = this.state

    return (
      <div className="footer">
        <div className="footer-wrapper">
          <ul className="footer-list">
            {this.state.footerList.map((fl, index) => {
              return (
                <FooterList key={index} cls={fl.className} name={fl.name} />
              )
            })}
          </ul>
          <RipeNccLink />
        </div>
      </div>
    )
  }
}









































export default Footer;