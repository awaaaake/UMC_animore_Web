import { useEffect, useState } from "react";
import './editprofile.css';

function Editprofile(props) {
    let [inputCount, setInputCount] = useState(0);

    const countCharacters = (str) => {
        const regex = /[\x00-\x7F]|[\u3131-\uD79D]|./g; // ASCII 문자, 한글 문자, 그 외의 모든 문자
        const matches = str.match(regex);
        return matches ? matches.length : 0;
    };

    const onTextareaHandler = (e) => {
        const inputValue = e.target.value;
        const characterCount = countCharacters(inputValue);
        setInputCount(characterCount);
    };
    return (
        <div className='detail'>
            <h4>프로필 수정</h4>
            <div className='detail_1'>
                <div className='profile'>
                    <div class="profile">
                        <div class="profile-picture"></div>
                        <div class="button-container">
                            <button className="profile-edit-button1">사진 수정</button>
                            <button className="profile-edit-button2">기본 이미지</button>
                        </div>
                    </div>
                </div>
                <div className='profile_content'>
                    <div className='nickname'>
                        <label for="nickname">닉네임</label>
                        <input type="text" id="nickname" name="nickname" placeholder="닉네임을 입력하세요" />
                    </div>
                    <div className='introduction'>
                        <label for="introduction">자기소개</label>
                        <textarea id="introduction" name="introduction" placeholder="자기소개를 입력하세요"
                            onChange={onTextareaHandler} maxLength="1000"
                        ></textarea>
                    </div>
                    <div className='p-wrapper'>
                        <p>
                            <span>{inputCount}</span>
                            <span>/1000 자</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editprofile;