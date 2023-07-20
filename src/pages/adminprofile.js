import { useEffect, useState } from "react";
import './adminprofile.css';
import profile from "../img/profile.png";

function Adminprofile(props) {
    let [inputCount, setInputCount] = useState(0);
    const [openingHours, setOpeningHours] = useState("");
    const [dayOff, setDayOff] = useState("");
    const [maxReservationCount, setMaxReservationCount] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const countCharacters = (str) => {
        const regex = /[\x00-\x7F]|[\u3131-\uD79D]|./g;
        const matches = str.match(regex);
        return matches ? matches.length : 0;
    };

    const onTextareaHandler = (e) => {
        const inputValue = e.target.value;
        const characterCount = countCharacters(inputValue);
        setInputCount(characterCount);
    };

    const onOpeningHoursChange = (e) => {
        setOpeningHours(e.target.value);
    };

    const onDayOffChange = (e) => {
        setDayOff(e.target.value);
    };

    const onMaxReservationCountChange = (e) => {
        setMaxReservationCount(e.target.value);
    };

    const onImageSelectHandler = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div className='detail'>
            <h4>업체 정보 관리</h4>
            <div className='detail_1'>
                <div className='profile2'>
                    <div className="admin-profile-picture">
                        {selectedImage ? (
                            <img src={URL.createObjectURL(selectedImage)} alt="프로필 사진" />
                        ) : (
                            <img src={profile} alt="프로필 사진" />
                        )}
                    </div>
                    <form method="post" encType="multipart/form-data">
                        <div className="admin-profile-button-container">
                            <label htmlFor="choose-admin-profile">사진 등록</label>
                            {/* Hidden file input element */}
                            <input
                                type="file"
                                id="choose-admin-profile"
                                name="profilePicture"
                                accept="image/*"
                                onChange={onImageSelectHandler}
                            />
                        </div>
                    </form>
                </div>
                <div className='profile_content'>
                    <div className='nickname'>
                        <label htmlFor="nickname">업체명</label>
                        <input type="text" id="nickname" name="nickname" placeholder="" />
                    </div>
                    <div className='introduction'>
                        <label htmlFor="introduction">업체소개</label>
                        <textarea
                            id="introduction"
                            name="introduction"
                            placeholder=""
                            onChange={onTextareaHandler}
                            maxLength="1000"
                        ></textarea>
                    </div>
                    <div className='p-wrapper'>
                        <p>
                            <span>{inputCount}</span>
                            <span>/1000 자</span>
                        </p>
                    </div>
                    <div className='introduction2'>
                        <label htmlFor="introduction2">태그</label>
                        <textarea
                            id="introduction2"
                            name="introduction2"
                            placeholder=""
                            onChange={onTextareaHandler}
                            maxLength="300"
                        ></textarea>
                    </div>
                    <div className='opening-hours'>
                        <label htmlFor="openingHours">오픈 시간</label>
                        <div className='opening-hours2'>
                            <input type='time' id='openingHours' name='reservation-time'></input>
                            <span> ~ </span>
                            <input type='time' id='openingHours' name='reservation-time'></input>
                        </div>
                    </div>
                    <div className='day-off'>
                        <label htmlFor="dayOff">휴무일</label>
                        <input
                            type="text"
                            id="dayOff"
                            name="dayOff"
                            value={dayOff}
                            onChange={onDayOffChange}
                            placeholder="ex) 매주 월요일, 격주 월요일"
                        />
                    </div>
                    <div className='max-reservation-count'>
                        <label htmlFor="maxReservationCount">최대 예약 건수</label>
                        <select
                            id="maxReservationCount"
                            name="maxReservationCount"
                            value={maxReservationCount}
                            onChange={onMaxReservationCountChange}
                        >
                            <option value="">선택하세요</option>
                            <option value="1">1 건</option>
                            <option value="2">2 건</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adminprofile;
