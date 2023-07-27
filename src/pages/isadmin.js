import { useEffect, useState } from "react";
import './isadmin.css';
import animore from '../img/animore.png';

function Isadmin(props) {
    let password = '1234';
    let email = 'abc@gmail.com';
    let [passwordInput, setPasswordInput] = useState('');
    let [emailInput, setEmailInput] = useState('');

    return (
        <div className="admininfo">
            <div>
                <img src={animore} alt="animore" width="300"></img>
            </div>
            <div className="admin-content">
                <form>
                    <input
                        type="email"
                        id="admin-email"
                        name="email"
                        required
                        placeholder="이메일을 입력해주세요"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                    <input
                        type="password"
                        id="admin-password"
                        name="password"
                        required
                        placeholder="비밀번호를 입력해주세요"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                    />
                    <div>
                        <button
                            type="submit"
                            className="confirm-button9"
                            onClick={() => {
                                if (emailInput === email && passwordInput === password) {
                                    props.navigate("/adminpage");
                                } else {
                                    alert('이메일 아이디 또는 비밀번호가 틀렸습니다');
                                }
                            }}
                        >
                            로그인
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Isadmin;
