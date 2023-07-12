import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import Animore_logo from './img/13.png';
import Editprofile from './pages/editprofile';
import Home from './pages/home';
import Memberinfo from './pages/memberInfo';
import Withdrawal from './pages/withdrawal';
import Inforeset from './pages/inforeset';
import IsWithdrawn from './pages/isWithdrawn';
import WithdrawalConf from './pages/withdrawalConf';


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState('/');

  const handleItemClick = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  return (
    <div className="App">
      {/*location 객체는 pathname 속성을 포함하고 있으므로, 
      location.pathname을 사용하여 경로를 비교해야 합니다. */
        location.pathname === '/withdrawalConf' ? null : <Header navigate={navigate}></Header>
      }
      <section className='mypage'>
        {
          location.pathname === '/withdrawalConf' ? null : <Mypagemenu navigate={navigate} activeItem={activeItem} handleItemClick={handleItemClick}></Mypagemenu>
        }
        <Routes>
          <Route path="/profile" element={
            <Editprofile></Editprofile>
          }
          />
          <Route path="/" element={
            <Home navigate={navigate}></Home>
          }></Route>
          <Route path="/memberinfo" element={
            <Memberinfo navigate={navigate}></Memberinfo>
          }>
          </Route>
          <Route path="/withdrawal" element={
            <Withdrawal navigate={navigate}></Withdrawal>
          }>
          </Route>
          <Route path="/userinfo-reset" element={
            <Inforeset navigate={navigate}></Inforeset>
          }></Route>
          <Route path="/iswithdrawn" element={
            <IsWithdrawn navigate={navigate}></IsWithdrawn>
          }></Route>
          <Route path="/withdrawalConf" element={
            <WithdrawalConf navigate={navigate}></WithdrawalConf>
          }></Route>
          <Route path='*' element={<div>없는 페이지</div>}></Route>
        </Routes>
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
          <li onClick={() => props.navigate('/mypage')}>마이페이지</li>
          <li onClick={() => props.navigate('/logout')}>로그아웃</li>
        </ul>
      </div>
    </header>
  )
}


function Mypagemenu(props) {
  return (
    <div className='menu'>
      <ul>
        <h4>MY PAGE</h4>
        <li
          className={props.activeItem === '/' ? 'active' : ''}
          onClick={() => props.handleItemClick('/')}
        >
          홈
        </li>
        <li
          className={props.activeItem === '/faq' ? 'active' : ''}
          onClick={() => props.handleItemClick('/faq')}
        >
          FAQ
        </li>
        <li
          className={props.activeItem === '/notice' ? 'active' : ''}
          onClick={() => props.handleItemClick('/notice')}
        >
          공지사항
        </li>
        <li
          className={props.activeItem === '/memberInfo' ? 'active' : ''}
          onClick={() => props.handleItemClick('/memberInfo')}
        >
          회원정보 수정
        </li>
        <li
          className={props.activeItem === '/withdrawal' ? 'active' : ''}
          onClick={() => props.handleItemClick('/withdrawal')}
        >
          회원탈퇴
        </li>
      </ul>
    </div>
  )
}

export default App;
