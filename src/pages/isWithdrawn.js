import { useEffect, useState } from "react";
import './isWithdrawn.css';
import mark from '../img/mark.png';
import alert from '../img/alert.png';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

function IsWithdrawn(props) {
    let password = '1234';
    let [입력값, 입력값변경] = useState('');

    return (
        <div className="memberinfo">
            <h2>회원탈퇴</h2>
            <div className="content">
                <img src={mark} alt="물음표" width="50"></img>
                <form>
                    <p className="message1">정말 회원탈퇴를 하시겠습니까?</p>
                    <p className="message2">회원탈퇴 이유를 선택해주세요</p>
                    <select id="reasonForWithdrawal" name="reasonForWithdrawal" required
                        onChange={(e) => { 입력값변경(e.target.value) }}>
                        <option value="한정적인 지역으로 인한 정보 부족">한정적인 지역으로 인한 정보 부족</option>
                        <option value="그냥">그냥</option>
                        <option value="그만할래">그만할래</option>
                        {/* 다른 옵션들을 추가할 수 있습니다 */}
                    </select>
                    <div className="alert">
                        <div className="alerttitle">
                            <div><img src={alert} width="20" alt="alert"></img></div>
                            <p className="message3">탈퇴 안내</p>
                        </div>
                        <p className="message4">탈퇴확인 시, 15일간 휴면 계정으로 전환되며 15일 이후 완전히 삭제됩니다.</p>
                        <p className="message4">휴면 계정 상태에서 다시 로그인 시 회원탈퇴가 취소되며, 계정 삭제 시 복구할 수 없습니다.</p>
                    </div>
                    <div className="button-group">
                        <button type="button" className="cancel-button"
                            onClick={() => props.navigate('/mypage/withdrawalConf')}
                        >탈퇴확인</button>
                        <button type="submit" className="confirm-button"
                            onClick={() => {
                                props.navigate("/mypage")
                            }}
                        >탈퇴취소</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default IsWithdrawn;
