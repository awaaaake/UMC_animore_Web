import { useEffect, useState } from "react";
import './memberInfo.css';
import key from '../img/key.png';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Memberinfo(props) {
    let [password, setPassword] = useState('');

    const handlePasswordCheck= () => {
        axios.get('https://animore.co.kr/mypage/member/user/password', {
            params: { pw: password} //params: 이 부분은 요청에 query parameter를 추가하는데 사용, password: password라는 이름의 query parameter를 설정
        })
        .then((response)=>{
            if (response.data.isSuccess) {
                props.navigate('/mypage/userinfo-reset');
            } else {
                alert('비밀번호가 틀렸습니다.');
            }
        }).catch((error)=>{//에러가 발생하면, 해당 에러 객체가 catch() 메서드의 매개변수인 error에 자동으로 전달
            console.error('Error checking password:', error);
        });
    };

    return (
        <div className="memberinfo">
            <h2>회원정보수정</h2>
            <div className="content">
                <img src={key} alt="열쇠" width="50"></img>
                <form>
                    <p className="message1">비밀번호 재확인</p>
                    <p className="message2">회원정보수정을 원하시는 경우 비밀번호를 입력해주세요</p>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required placeholder="비밀번호 입력"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}   
                    />
                    <div>
                    <button type="submit" className="confirm-button4"
                            onClick={handlePasswordCheck}
                    >확인</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Memberinfo;