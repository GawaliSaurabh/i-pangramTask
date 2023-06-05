import React from "react";
import { days_data } from "../assets/Data";

const Days = ({ data }) => {
  return (
    <>
      {days_data.map((data, index) => (
        <div className="days-Container">
          <div className="day-flex">
            <div className="day-section">
              <p>{data.day}</p>
              <p>{data.date}</p>
            </div>
            <div className="time-subContainr">
              <div className="time-flex">
                <input className="checkbx" type="checkbox" />
                <p className="time">{data.time1}</p>
              </div>
              <div className="time-flex1">
                <input className="checkbx" type="checkbox" />
                <p className="time">{data.time2}</p>
              </div>
              <div className="time-flex1">
                <input className="checkbx" type="checkbox" />
                <p className="time">{data.time3}</p>
              </div>
              <div className="time-flex1">
                <input className="checkbx" type="checkbox" />
                <p className="time">{data.time4}</p>
              </div>

              <div className="time-flex1">
                <input className="checkbx" type="checkbox" />
                <p className="time">{data.time5}</p>
              </div>
              <div className="time-flex1">
                <input className="checkbx" type="checkbox" />
                <p className="time">{data.time6}</p>
              </div>
              <div className="time-flex1">
                <input className="checkbx" type="checkbox" />
                <p className="time">{data.time7}</p>
              </div>
              <div className="time-flex1">
                <input className="checkbx" type="checkbox" />
                <p className="time">{data.time8}</p>
              </div>
              <div className="time-subContainr">
                <div className="time-flex">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time9}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time10}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time11}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time12}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time13}</p>
                </div>

                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time14}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time15}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time16}</p>
                </div>
                <div className="time-flex">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time17}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time18}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time19}</p>
                </div>
              </div>
              <div className="time-subContainr">
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time20}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time21}</p>
                </div>

                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time22}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time23}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time24}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time25}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time26}</p>
                </div>

                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time27}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time28}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time29}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time30}</p>
                </div>
                <div className="time-flex1">
                  <input className="checkbx" type="checkbox" />
                  <p className="time">{data.time31}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Days;
