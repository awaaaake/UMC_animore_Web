import { useEffect, useState } from "react";
import './editprofile.css';
import defaultProfileImage from "../img/profile.png";

function Editprofile(props) {
    let [inputCount, setInputCount] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [useDefaultImage, setUseDefaultImage] = useState(true);

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
    const onImageSelectHandler = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        setUseDefaultImage(false);
    };

    return (
        <div className='detail'>
            <h4>프로필 수정</h4>
            <div className='detail_1'>
                <div className='profile'>
                    <div className="profile-picture">
                        {useDefaultImage || !selectedImage ? (
                            /*버튼에서 클릭할 시 바로 selected이미지의 경로를 설정해주는것이나라, 
                        버튼에서는 default사진으로 할것인가에대한 상태만 저장하고, 실제 사진경로를 설정하는 것으 이미지 태그에서
                        */
                            <img src={defaultProfileImage} alt="프로필 사진" />
                        ) : (
                            <img src={URL.createObjectURL(selectedImage)} alt="프로필 사진" />
                        )}
                    </div>
                    <div className="button-container">
                        <label htmlFor="choose-profile">사진 수정</label>
                        <input
                            type="file"
                            id="choose-profile"
                            name="profilePicture"
                            accept="image/*"
                            onChange={onImageSelectHandler}
                            style={{ display: "none" }}
                        />
                        <button className="profile-edit-button2" onClick={() => setUseDefaultImage(true)}>
                            기본 이미지
                        </button>
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
                    <div class="edit-button-container">
                        <button className="edit-profile-button" onClick={() => props.navigate('/mypage/profile')}>수정하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editprofile;