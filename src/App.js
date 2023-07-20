import logo from './logo.svg';
import './App.css';
import { nestedroutesy, Routes, Route, Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import Animore_logo from './img/13.png';
import Editprofile from './pages/editprofile';
import Home from './pages/home';
import Memberinfo from './pages/memberInfo';
import Withdrawal from './pages/withdrawal';
import Inforeset from './pages/inforeset';
import IsWithdrawn from './pages/isWithdrawn';
import WithdrawalConf from './pages/withdrawalConf';
import Mypage from './pages/mypage';
import Adminpage from './pages/adminpage';
import Adminhome from './pages/adminhome';
import Adminprofile from './pages/adminprofile';
import Isadmin from './pages/isadmin';

function App() {
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <Routes>
        <Route path="/mypage" element={
          <Mypage></Mypage>}>
          <Route path="profile" element={
            <Editprofile></Editprofile>
          }
          />
          <Route path="" element={
            <Home navigate={navigate}></Home>
          }></Route>
          <Route path="memberinfo" element={
            <Memberinfo navigate={navigate}></Memberinfo>
          }>
          </Route>
          <Route path="withdrawal" element={
            <Withdrawal navigate={navigate}></Withdrawal>
          }>
          </Route>
          <Route path="userinfo-reset" element={
            <Inforeset navigate={navigate}></Inforeset>
          }></Route>
          <Route path="iswithdrawn" element={
            <IsWithdrawn navigate={navigate}></IsWithdrawn>
          }></Route>
          <Route path="withdrawalConf" element={
            <WithdrawalConf navigate={navigate}></WithdrawalConf>
          }></Route>
          <Route path='*' element={<div>없는 페이지</div>}></Route>
        </Route>
        {/*관리자 페이지*/ }
        <Route path='/isadmin' element={<Isadmin navigate={navigate}></Isadmin>}></Route>
        <Route path="/adminpage" element={
          <Adminpage></Adminpage>}>
          <Route path="" element={
            <Adminhome navigate={navigate}></Adminhome>
          }></Route>
          <Route path="adminprofile" element={
            <Adminprofile navigate={navigate}></Adminprofile>
          }></Route>
          {/* <Route path="admininfo" element={
            <Admininfo navigate={navigate}></Admininfo>
          }>
          </Route> */}
          <Route path="withdrawal" element={
            <Withdrawal navigate={navigate}></Withdrawal>
          }></Route>
          <Route path="userinfo-reset" element={
            <Inforeset navigate={navigate}></Inforeset>
          }></Route>
          <Route path="iswithdrawn" element={
            <IsWithdrawn navigate={navigate}></IsWithdrawn>
          }></Route>
          <Route path="withdrawalConf" element={
            <WithdrawalConf navigate={navigate}></WithdrawalConf>
          }></Route>
          <Route path='*' element={<div>없는 페이지</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
