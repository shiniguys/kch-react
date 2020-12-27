import React, { Component } from 'react';


function UserRoom(props) {
  return (
    <div className={props.namecl}>
      <span className="header-room--text">Личный Кабинет</span>
      <a href="#" className="header-room--link">Вход</a>
    </div>
  )
}



export default UserRoom;