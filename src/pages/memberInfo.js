import { useEffect, useState } from "react";
import './memberInfo.css';
import key from '../img/key.png';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

function Memberinfo(props) {
    let password = '1234';
    let [입력값, 입력값변경] = useState('');

    return (
        <div className="memberinfo">
            <h2>회원정보수정</h2>
            <div className="content">
                <img src={key} alt="열쇠" width="50"></img>
                <form>
                    <p className="message1">비밀번호 재확인</p>
                    <p className="message2">회원정보수정을 원하시는 경우 비밀번호를 입력해주세요</p>
                    <input type="password" id="password" name="password" required placeholder="비밀번호 입력"
                        onChange={(e) => { 입력값변경(e.target.value) }}
                    />
                    <div>
                    <button type="submit" className="confirm-button4"
                            onClick={() => {
                                입력값 === password ? props.navigate("/userinfo-reset") : alert('비밀번호가 틀렸습니다')
                            }}
                        >확인</button>
                    </div>
                    {/* <div class="button-group4"> 
                        <button type="button" className="cancel-button">취소</button>
                        <button type="submit" className="confirm-button4"
                            onClick={() => {
                                입력값 === password ? props.navigate("/userinfo-reset") : alert('비밀번호가 틀렸습니다')
                            }}
                        >확인</button>
                    </div>  */}
                </form>
                {/* <div className="password-options">
                    <p>비밀번호를 잊어버리셨나요?</p>
                    <p>비밀번호 찾기</p>
                </div> */}
            </div>
        </div>
    )
}

export default Memberinfo;