import { useEffect, useState } from "react";
import './inforeset.css';
import axios from "axios";

function Inforeset(props) {
    let [showPetInfo, setShowPetInfo] = useState(false); // 반려동물 정보 수정 페이지 표시 여부 상태
    let [selectedButton, setSelectedButton] = useState('user');
    let handlePetInfoClick = () => {
        setShowPetInfo(true); // 반려동물 정보 수정 페이지를 표시
        setSelectedButton('pet');
    };

    let handleUserInfoClick = () => {
        setShowPetInfo(false);
        setSelectedButton('user');
    };

    let [userInfo, setUserInfo] = useState(null);
    let [petInfo, setPetInfo] = useState(null);

    const updateUserInfo = () => {
        axios.post('https://animore.co.kr/mypage/member/user', userInfo)
            .then((response) => {
                console.log('사용자 정보 업데이트 성공:', response.data.result);
            }).catch((error) => {
                console.error('사용자 정보 업데이트 실패:', error);
            });
    }

    const updatePetInfo = () => {
        axios.post('https://animore.co.kr/mypage/member/pet', petInfo)
            .then((response) => {
                console.log('반려동물 정보 업데이트 성공:', response.data.result);
            }).catch((error) => {
                console.error('반려동물 정보 업데이트 실패:', error);
            });
    }

    useEffect(() => {
        axios.get('https://animore.co.kr/mypage/member/user')
            .then((response) => {
                // result 객체를 petInfo 상태로 설정
                //"result" 필드에 해당하는 값이며, 이 값의 자료형은 객체(Object)
                setUserInfo(response.data.result);
            }).catch((error) => {//에러가 발생하면, 해당 에러 객체가 catch() 메서드의 매개변수인 error에 자동으로 전달
                console.error('Error fetching pet information:', error);
            });
        axios.get('https://animore.co.kr/mypage/member/pet')
            .then((response) => {
                // result 객체를 petInfo 상태로 설정
                setPetInfo(response.data.result);
            }).catch((error) => {//에러가 발생하면, 해당 에러 객체가 catch() 메서드의 매개변수인 error에 자동으로 전달
                console.error('Error fetching pet information:', error);
            });
    }, []);

    return (
        <div className="resetinfo">
            <div className="button-group3">
                <button
                    type="button"
                    className={selectedButton === 'user' ? 'selected-button' : 'unselected-button'}
                    onClick={handleUserInfoClick}>회원 기본정보 수정</button>
                <button
                    type="button"
                    className={selectedButton === 'pet' ? 'selected-button' : 'unselected-button'}
                    onClick={handlePetInfoClick}>반려동물 수정</button>
            </div>
            {
                showPetInfo ? (
                    <form>
                        <table>
                            <tbody>
                                {/**코드에서 반려동물 정보 수정 페이지의 입력 필드에 
                                 * 초기값이 없이 빈 값으로 설정되어 있습니다. 
                                 * 이에 따라 회원 정보 수정 페이지에서 입력한 값이 
                                 * 반려동물 정보 수정 페이지에서 동일한 위치에 같은 값이 나타나게 됩니다. */}
                                <tr>
                                    <td>반려동물 이름</td>
                                    <td><input type="text" name="petName" value={petInfo.petName} required
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                            let copy = { ...petInfo };
                                            copy.petName = e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                            setPetInfo(copy);
                                        }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>반려동물 종류</td>
                                    <td>
                                        <select name="petType" value={petInfo.petType} required onChange={(e) => {
                                            /*선택된 옵션의 value값이 e.target.value에 저장되도록 한다.*/
                                            let copy = { ...petInfo };
                                            copy.petType = e.target.value;
                                            setPetInfo(copy);
                                        }}>
                                            <option value="">선택</option>
                                            <option value="강아지">강아지</option>
                                            <option value="고양이">고양이</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>성별</td>
                                    <td>
                                        <input type="checkbox" name="gender" value={petInfo.petGender}
                                            checked={petInfo.petGender == '수컷'}  /*gender가 "남성"일 때 선택된 상태로 표시*/
                                            onChange={(e) => {
                                                let copy = { ...petInfo };
                                                copy.petGender = e.target.value; //체크가 된 input의 value값을 저장한다.
                                                setPetInfo(copy); //항시 state값에는 현재 체크된or체크되지않은 input의 value값이 담기도록한다.
                                            }}
                                        /> 수컷
                                        <input type="checkbox" name="gender" value={petInfo.petGender}
                                            checked={petInfo.petGender == '암컷'}  /*gender가 "남성"일 때 선택된 상태로 표시*/
                                            onChange={(e) => {
                                                let copy = { ...petInfo };
                                                copy.petGender = e.target.value; //체크가 된 input의 value값을 저장한다.
                                                setPetInfo(copy); //항시 state값에는 현재 체크된or체크되지않은 input의 value값이 담기도록한다.
                                            }}
                                        /> 암컷
                                        <input type="checkbox" name="gender" value={petInfo.petGender}
                                            checked={petInfo.petGender == '중성화'}  /*gender가 "남성"일 때 선택된 상태로 표시*/
                                            onChange={(e) => {
                                                let copy = { ...petInfo };
                                                copy.petGender = e.target.value; //체크가 된 input의 value값을 저장한다.
                                                setPetInfo(copy); //항시 state값에는 현재 체크된or체크되지않은 input의 value값이 담기도록한다.
                                            }} /> 중성화
                                    </td>
                                </tr>
                                <tr>
                                    <td>반려동물 무게</td>
                                    <td><input type="text" name="petWeight" value={petInfo.petWeight} required
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                            let copy = { ...petInfo };
                                            copy.petWeight = e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                            setPetInfo(copy);
                                        }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>생년월일</td>
                                    <td><input type="text" name="petBirthdate" value={petInfo.petBirth} required
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                            let copy = { ...petInfo };
                                            copy.petBirth = e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                            setPetInfo(copy);
                                        }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>특이사항</td>
                                    <td><textarea name="petNotes" value={petInfo.petSpecials}
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                            let copy = { ...petInfo };
                                            copy.petSpecials = e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                            setPetInfo(copy);
                                        }}
                                    ></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="resetinfo-button" onClick={()=> {
                            updatePetInfo(); //onClick시 두개의 함수를 실행하고싶다면, 그냥{ }안에 ;로 끝나는 두 함수 작성
                            props.navigate('/resetinfo');
                        }}>반려동물정보 수정</button>
                    </form>
                ) : (
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td>이메일</td>
                                    <td><input type="email" name="email" value={userInfo.email} required
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                            let copy = { ...userInfo };
                                            copy.email = e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                            setUserInfo(copy);
                                        }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>비밀번호</td>
                                    <td><input type="password" name="password" value={userInfo.password} required
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                            let copy = { ...userInfo };
                                            copy.password = e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                            setUserInfo(copy);
                                        }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>이름</td>
                                    <td><input type="text" name="name" value={userInfo.nickname} required
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                            let copy = { ...userInfo };
                                            copy.nickname = e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                            setUserInfo(copy);
                                        }}
                                    /></td>
                                </tr> {/*서버에서 전달받은 데이터를 value로 미리 띄울수있음, 즉 해당필드의 초기값을 지정할 수 있음
                                -> 사용자가 필드를 수정하면 'value'값도 없데이트됨
                                required속성으로 필수입력 필드임을 나타냄*/ }
                                <tr>
                                    <td>생년월일</td>
                                    <td><input type="text" name="birthdate" value={userInfo.birth} required
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                            let copy = { ...userInfo };
                                            copy.birth = e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                            setUserInfo(copy);
                                        }} /></td>
                                </tr>
                                <tr>
                                    <td>전화번호</td>
                                    <td><input type="tel" name="phone" value={userInfo.phone} required
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                            let copy = { ...userInfo };
                                            copy.phone = e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                            setUserInfo(copy);
                                        }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>성별</td>
                                    <td><input type="radio" name="gender" value={userInfo.gender}
                                        checked={userInfo.gender == '남성'}
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                            let copy = { ...userInfo };
                                            copy.gender = e.target.value;/*체크된 또는 체크되지않은 input의 value값이 담기도록*/
                                            setUserInfo(copy);
                                        }}
                                    /> 남성
                                        <input type="radio" name="gender" value={userInfo.gender}
                                            checked={userInfo.gender == '여성'}
                                            onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                                let copy = { ...userInfo };
                                                copy.gender = e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                                setUserInfo(copy);
                                            }}
                                        /> 여성
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="resetinfo-button" onClick={() => {
                            updateUserInfo();
                            props.navigate('/resetinfo')
                            }}>회원정보 수정</button>
                    </form>
                )
            }
        </div>


    );
}


export default Inforeset;