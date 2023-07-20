import { useEffect, useState } from "react";
import './isadmin.css';
import key from '../img/key.png';

function Isadmin(props) {
    let password = '1234';
    let [입력값, 입력값변경] = useState('');

    return (
        <div className="admininfo">
            <h2>비밀번호 재확인</h2>
            <div className="content">
                <img src={key} alt="열쇠" width="50"></img>
                <form>
                    <p className="message1">비밀번호 재확인</p>
                    <p className="message2">회원님은 관리자전용 계정입니다.</p>
                    <p className="message2">2차 비밀번호를 입력해주세요</p>
                    <input type="password" id="password" name="password" required placeholder="비밀번호 입력"
                        onChange={(e) => { 입력값변경(e.target.value) }}
                    />
                    <div>
                        <button type="submit" className="confirm-button2"
                            onClick={()=>{
                                입력값 === password ? props.navigate("/adminpage") : alert('비밀번호가 틀렸습니다')
                            }}
                        >확인</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Isadmin;
