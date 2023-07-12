import { useEffect, useState } from "react";
import './inforeset.css';

function Inforeset(props) {
    let [showPetInfo, setShowPetInfo] = useState(false); // 반려동물 정보 수정 페이지 표시 여부 상태
    let [selectedButton, setSelectedButton] = useState('user');
    let [userinfo, setUserinfo] = useState(['abc@gmail.com','','신짱구','2000.11.11','010-1234-5678','남성']); /*유저정보 전체를 배열형태로 저장해도 굿*/
    let [petinfo, setPetinfo] = useState(['김봉봉','강아지','수컷','4kg','2살추정','장모종']); /*유저정보 전체를 배열형태로 저장해도 굿*/

    let handlePetInfoClick = () => {
        setShowPetInfo(true); // 반려동물 정보 수정 페이지를 표시
        setSelectedButton('pet');
    };

    let handleUserInfoClick = () => {
        setShowPetInfo(false); 
        setSelectedButton('user');
    };

    return (
        <div className="resetinfo">
            <div className="button-group3">
                <button 
                type="button" 
                className={selectedButton==='user'?'selected-button':'unselected-button'} 
                onClick={handleUserInfoClick}>회원 기본정보 수정</button>
                <button 
                type="button" 
                className={selectedButton==='pet'?'selected-button':'unselected-button'}
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
                                    <td><input type="text" name="petName" value={petinfo[0]} required 
                                    onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/
                                    let copy=[...petinfo];
                                    copy[0]=e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                    setPetinfo(copy);
                                }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>반려동물 종류</td>
                                    <td>
                                        <select name="petType" value={petinfo[1]} required onChange={(e) => {
                                            /*선택된 옵션의 value값이 e.target.value에 저장되도록 한다.*/ 
                                            let copy=[...petinfo]; 
                                            copy[1]=e.target.value;
                                            setPetinfo(copy);            
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
                                        <input type="checkbox" name="gender" value="수컷"
                                        checked={petinfo[2]=='수컷'}  /*gender가 "남성"일 때 선택된 상태로 표시*/  
                                        onChange={(e)=> {
                                            let copy=[...petinfo];
                                            copy[2]=e.target.value; //체크가 된 input의 value값을 저장한다.
                                            setPetinfo(copy); //항시 state값에는 현재 체크된or체크되지않은 input의 value값이 담기도록한다.
                                        }}
                                        /> 수컷
                                        <input type="checkbox" name="gender" value="암컷" 
                                        checked={petinfo[2]=='암컷'}  /*gender가 "남성"일 때 선택된 상태로 표시*/  
                                        onChange={(e)=> {
                                            let copy=[...petinfo];
                                            copy[2]=e.target.value; //체크가 된 input의 value값을 저장한다.
                                            setPetinfo(copy); //항시 state값에는 현재 체크된or체크되지않은 input의 value값이 담기도록한다.
                                        }}
                                        /> 암컷
                                        <input type="checkbox" name="gender" value="중성화" 
                                        checked={petinfo[2]=='중성화'}  /*gender가 "남성"일 때 선택된 상태로 표시*/  
                                        onChange={(e)=> {
                                            let copy=[...petinfo];
                                            copy[2]=e.target.value; //체크가 된 input의 value값을 저장한다.
                                            setPetinfo(copy); //항시 state값에는 현재 체크된or체크되지않은 input의 value값이 담기도록한다.
                                        }}/> 중성화
                                    </td>
                                </tr>
                                <tr>
                                    <td>반려동물 무게</td>
                                    <td><input type="text" name="petWeight" value={petinfo[3]} required 
                                    onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/ 
                                    let copy=[...petinfo];
                                    copy[3]=e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                    setPetinfo(copy);
                                }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>생년월일</td>
                                    <td><input type="text" name="petBirthdate" value={petinfo[4]} required 
                                    onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/ 
                                    let copy=[...petinfo];
                                    copy[4]=e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                    setPetinfo(copy);
                                }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>특이사항</td>
                                    <td><textarea name="petNotes" value={petinfo[5]}
                                    onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/ 
                                    let copy=[...petinfo];
                                    copy[5]=e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                    setPetinfo(copy);
                                }}
                                    ></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="resetinfo-button" onClick={() => props.navigate('/resetinfo')}>반려동물정보 수정</button>
                    </form>
                ) : (
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td>이메일</td>
                                    <td><input type="email" name="email" value={userinfo[0]} required 
                                    onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/ 
                                    let copy=[...userinfo];
                                    copy[0]=e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                    setUserinfo(copy);
                                }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>비밀번호</td>
                                    <td><input type="password" name="password" value={userinfo[1]} required 
                                    onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/ 
                                    let copy=[...userinfo];
                                    copy[1]=e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                    setUserinfo(copy);
                                }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>이름</td>
                                    <td><input type="text" name="name" value={userinfo[2]} required 
                                    onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/ 
                                    let copy=[...userinfo];
                                    copy[2]=e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                    setUserinfo(copy);
                                }}
                                    /></td> 
                                </tr> {/*서버에서 전달받은 데이터를 value로 미리 띄울수있음, 즉 해당필드의 초기값을 지정할 수 있음
                                -> 사용자가 필드를 수정하면 'value'값도 없데이트됨
                                required속성으로 필수입력 필드임을 나타냄*/ }
                                <tr>
                                    <td>생년월일</td>
                                    <td><input type="text" name="birthdate" value={userinfo[3]} required 
                                    onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/ 
                                    let copy=[...userinfo];
                                    copy[3]=e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                    setUserinfo(copy);
                                }}/></td>
                                </tr>
                                <tr>
                                    <td>전화번호</td>
                                    <td><input type="tel" name="phone" value={userinfo[4]} required 
                                    onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/ 
                                    let copy=[...userinfo];
                                    copy[4]=e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                    setUserinfo(copy);
                                }}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>성별</td>
                                    <td><input type="radio" name="gender" value="남성"
                                    checked={userinfo[5]=='남성'}
                                    onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/ 
                                        let copy=[...userinfo];
                                        copy[5]=e.target.value;/*체크된 또는 체크되지않은 input의 value값이 담기도록*/
                                        setUserinfo(copy);
                                    }}
                                    /> 남성
                                        <input type="radio" name="gender" value="여성" 
                                        checked={userinfo[5]=='여성'}
                                        onChange={(e) => {/*이벤트객체를 파라미터로 받아서*/ 
                                            let copy=[...userinfo];
                                            copy[5]=e.target.value;/*항시 체크된 또는 체크되지않은 input의 value값이 state에 담기도록*/
                                            setUserinfo(copy);
                                        }}
                                        /> 여성
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="resetinfo-button" onClick={() => props.navigate('/resetinfo')}>회원정보 수정</button>
                    </form>

                )
            }
        </div>


    );
}


export default Inforeset;