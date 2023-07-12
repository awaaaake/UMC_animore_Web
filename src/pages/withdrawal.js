import { useEffect, useState } from "react";
import './withdrawal.css';
import key from '../img/key.png';

function Withdrawal(props) {
    let password = '1234';
    let [입력값, 입력값변경] = useState('');

    return (
        <div className="memberinfo">
            <h2>회원탈퇴</h2>
            <div className="content">
                <img src={key} alt="열쇠" width="50"></img>
                <form>
                    <p className="message1">비밀번호 재확인</p>
                    <p className="message2">안전한 탈퇴 진행을 위해 비밀번호를 한 번 더 입력해주세요.</p>
                    <input type="password" id="password" name="password" required placeholder="비밀번호 입력"
                        onChange={(e) => { 입력값변경(e.target.value) }}
                    />
                    <div>
                    <button type="submit" className="confirm-button2"
                        onClick={() => {
                            입력값 === password ? props.navigate("/iswithdrawn ") : alert('비밀번호가 틀렸습니다')
                        }}
                    >확인</button>
                    </div>

                </form>
                {/* <div className="password-options">
                    <p>비밀번호를 잊어버리셨나요?</p>
                    <p>비밀번호 찾기</p>
                </div> */}
            </div>
        </div>
    )
}

export default Withdrawal;