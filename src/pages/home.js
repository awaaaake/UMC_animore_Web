import { useEffect, useState } from "react";
import './home.css';
import profile from '../img/dog.png';
import grey from '../img/grey.png';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';


function Home(props) {
    let [history, setHistory] = useState(['봉봉살롱', '도그뷰티', '까끌래보끌래']);
    
    return (
        <div className="home">
            <div className="pet-profile">
                <img src={profile} alt="반려견 사진" />
                <div className="info">
                    <h4>OOO님 안녕하세요!</h4>
                    <p>반려견 : 봉봉이(포메라니안) / 5살 / 중성화O</p>
                </div>
                <button className="edit-profile-button" onClick={()=> props.navigate('/profile')}>프로필 수정</button>
            </div>
            <div className="history">
                <p>최근 이용 기록</p>
                <Row>
                    {
                        history.map(function (a, i) {
                            return (
                                <Col sm>
                                    <img src={grey} width="300" height="270"  onClick={() => props.navigate(`/reservation/${history[i]}`)}
                                    ></img>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default Home;