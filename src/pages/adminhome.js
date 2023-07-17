import { useEffect, useState } from "react";
import './adminhome.css';

function Adminhome(props) {
    let [admin_name, setAdmin_name] = useState(['봉봉살롱', '도그뷰티', '까끌래보끌래']);
    let [currentDate, setCurrentDate] = useState(new Date());

    const generateCalendar = () => {
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const startDate = firstDay.getDay();
        const calendar = [];

        for (let i = 0; i < startDate; i++) {
            calendar.push(<div className="date empty" key={`empty-${i}`}></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const isSelected = date.toDateString() === currentDate.toDateString();
            const isToday = date.toDateString() === new Date().toDateString();
            const isHoliday = i === 1 || (i === 15 && currentDate.getMonth() === 7); // Example: 1st of the month and August 15th

            const classNames = ["date"];
            if (isSelected) classNames.push("selected");
            if (isToday) classNames.push("today");
            if (isHoliday) classNames.push("holiday");
            if (date.getDay() === 6) classNames.push("saturday"); // Add "saturday" class for Saturdays
            if (date.getDay() === 0) classNames.push("sunday"); // Add "sunday" class for Sundays

            calendar.push(
                <div className={classNames.join(" ")} key={i} onClick={() => handleDateClick(date)}>
                    <div className={isHoliday ? "holiday-date" : "date-text"}>
                        {i}
                    </div>
                </div>
            );
        }

        return calendar;
    };

    const handlePrevMonth = () => {
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(nextMonth);
    };

    const handleToday = () => {
        setCurrentDate(new Date());
    };

    const handleDateClick = (date) => {
        setCurrentDate(date);
    };

    const getFormattedMonth = () => {
        const options = { year: 'numeric', month: 'long' };
        return currentDate.toLocaleDateString(undefined, options);
    };

    return (
        <div className="adminhome">
            <h4>{admin_name[0]}님 반갑습니다!</h4>
            <div className="calendar">
                <div className="nav">
                    <button className="nav-btn go-prev" onClick={handlePrevMonth}>&lt;</button>
                    <button className="nav-btn go-today" onClick={handleToday}>{getFormattedMonth()}</button>
                    <button className="nav-btn go-next" onClick={handleNextMonth}>&gt;</button>
                </div>
                <div className="main">
                    <div className="day sunday">일</div> {/* Add "sunday" class */}
                    <div className="day">월</div>
                    <div className="day">화</div>
                    <div className="day">수</div>
                    <div className="day">목</div>
                    <div className="day">금</div>
                    <div className="day saturday">토</div> {/* Add "saturday" class */}
                </div>
                <div className="dates">{generateCalendar()}</div>
            </div>
        </div>
    );
}

export default Adminhome;
