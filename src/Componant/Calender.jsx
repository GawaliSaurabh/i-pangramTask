import React , { useState }  from "react";
import "../Componant/Style.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { format, addWeeks, subWeeks } from "date-fns";


const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevWeek = () => {
    setSelectedDate((prevDate) => subWeeks(prevDate, 1));
  };

  const handleNextWeek = () => {
    setSelectedDate((prevDate) => addWeeks(prevDate, 1));
  };

  return (
    <>
      <div className="container">
        {/* Header */}

        <div className="header-cont">
          <div>
            <AiFillCaretLeft className="arr" />
            <button className="pre-btn" onClick={handlePrevWeek}>
              Previous week
            </button>
          </div>
          <div>
            <span className="date">
              {format(selectedDate, "MMMM do, yyyy")}
            </span>
          </div>
          <div className="">
            <button className="pre-btn" onClick={handleNextWeek}>
              Next week
            </button>
            <AiFillCaretRight className="arr" />
          </div>
        </div>

        {/* Time Zone */}
        <div className="time-zone-cont">
          <div>
            <select className="dropdwn">
              <option>Time Zone</option>
              <option>Time Zone</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;
