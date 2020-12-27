import React, { Component } from 'react';
import './Tools.scss';
import { render } from '@testing-library/react';





const Titem = (props) => (
  <li className="tools-item">
    <a href={props.url} className={props.className} >
    </a>
  </li>
)


class Tools extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titem: [
        {
          url: '#',
          clName: 'tools-link preim'
        },
        {
          url: '#',
          clName: 'tools-link tarif'
        },
        {
          url: '#',
          clName: 'tools-link podkl'
        },
        {
          url: '#',
          clName: 'tools-link kakpodkl'
        },
        {
          url: '#',
          clName: 'tools-link oplata'
        }
      ]
    }
  }

  render() {

    const {
      titem
    } = this.state

    return (
      <div className="tools">
          <ul className="tools-list">
            {this.state.titem.map((tl, index) => {
              return (
                <Titem key={index} url={tl.url} className={tl.clName} />
              )
            })}
          </ul>
      </div>
    )
  }
}







export default Tools;