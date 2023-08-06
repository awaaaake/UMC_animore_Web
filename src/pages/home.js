import { useEffect, useState } from "react";
import './home.css';
import profile from '../img/dog.png';
import grey from '../img/grey.png';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Home(props) {
    let [Info, setInfo] = useState(null);

    useEffect(() => {
        //localStorage에서 access token을 가져옵니다.
        const accessToken = 'Bearer 사용자토큰';
        // access token을 인증 헤더에 설정합니다.
        axios.defaults.headers.common["Authorization"] = accessToken;

        axios.get('/mypage')
            .then((response) => {
                // result 객체를 petInfo 상태로 설정합니다.
                console.log(response.data.result);
                setInfo(response.data.result);
            }).catch((error) => {
                // 에러가 발생하면, 해당 에러 객체가 catch() 메서드의 매개변수인 error에 자동으로 전달됩니다.
                console.error('Error fetching pet information:', error);
            });
    }, []);

    // 데이터가 로딩 중일 때를 처리합니다.
    if (Info === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home">
            <div className="pet-profile">
                <div className='info2'>
                    <img src={profile} alt="반려견 사진" />
                    <div className="info">
                        <h4>{Info.nickname}님 안녕하세요!</h4>
                        <p>{Info.petType} : {Info.petName} / {Info.petAge}</p>
                    </div>
                </div>
                <button className="edit-profile-button" onClick={() => props.navigate('/mypage/profile')}>프로필 수정</button>
            </div>
            <div className="history">
                <p>최근 이용 기록</p>
                <Row>
                    {
                        Info.storeId_ImageUrl.map(function (item, i) {
                            const storeId = Object.keys(item)[0]; //map함수에의해 item담기는 객체가 계속 변함
                            const imageUrl = Object.values(item)[0];
                            return (
                                <Col sm key={i}>
                                    <img
                                        src={imageUrl}//{item[1]}이렇게하면 object의 두 번째 요소를 의미하는 것이 아닌, 딕셔너리의 키로 사용될 숫자 1에 해당하는 값을 가져옴
                                        width="100%"//100%
                                        height="250"
                                        onClick={() => props.navigate(`/reservation/${storeId}`)}
                                    />
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