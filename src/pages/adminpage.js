import './adminpage.css';
import { useState, useEffect } from 'react';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import Animore_logo from '../img/13.png';
import Isadmin from './isadmin';

function Adminpage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('/');
  
  const handleItemClick = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  return (
    <div className="Adminpage">
      {/* location 객체는 pathname 속성을 포함하고 있으므로, 
      location.pathname을 사용하여 경로를 비교해야 합니다. */
        location.pathname === '/adminpage/withdrawalConf' ? null : <Header navigate={navigate}></Header>
      }
      <section className='adminpage'>
        {
          location.pathname === '/adminpage/withdrawalConf' ? null : <Adminpagemenu navigate={navigate} activeItem={activeItem} handleItemClick={handleItemClick}></Adminpagemenu>
        }
        <Outlet></Outlet>
      </section>
    </div>
  );
}


function Header(props) {
  return (
    <header>
      <div className='logo'>
        <img src={Animore_logo} onClick={() => props.navigate('/')} alt="로고"></img>
      </div>
      <div className="Navbar">
        <ul>
          <li onClick={() => props.navigate('/')}>홈</li>
          <li onClick={() => props.navigate('/beautysalon')}>미용실</li>
          <li onClick={() => props.navigate('/reservation')}>예약내역</li>
          <li onClick={() => props.navigate('/adminpage')}>관리자 페이지</li>
          <li onClick={() => props.navigate('/logout')}>로그아웃</li>
        </ul>
      </div>
    </header>
  )
}


function Adminpagemenu(props) {
  return (
    <div className='menu'>
      <ul>
        <h4>Management</h4>
        <li
          className={props.activeItem === '/adminpage' ? 'active' : ''}
          onClick={() => props.handleItemClick('/adminpage')}
        >
          홈
        </li>
        <li
          className={props.activeItem === '/adminpage/reservation' ? 'active' : ''}
          onClick={() => props.handleItemClick('/adminpage/reservation')}
        >
          예약관리
        </li>
        <li
          className={props.activeItem === '/adminpage/notice' ? 'active' : ''}
          onClick={() => props.handleItemClick('/adminpage/notice')}
        >
          공지사항
        </li>
        <li
          className={props.activeItem === '/adminpage/withdrawal' ? 'active' : ''}
          onClick={() => props.handleItemClick('/adminpage/withdrawal')}
        >
          회원탈퇴
        </li>
      </ul>
    </div>
  )
}


export default Adminpage;
