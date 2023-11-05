// import { useState, useEffect } from "react";
import bg_img from "../../images/bg_image.png";
import encrypImg from "../../images/encryp.png";
import sendIcon from "../../images/sendIcon.png";
import "./notes.css";

export default function GetNotes({ grName, selectedColor }) {
  

  // useEffect(() => {
  //   const todaysDate = new Date();
  //   const options = {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   };
  //   const formattedDate = todaysDate.toLocaleDateString("en-US", options);
  //   setNewNotesData({
  //     ...newNotesData,
  //     date: formattedDate,
  //   });
  // }, []);

  // useEffect(() => {
  //   const date = new Date();
  //   let hours = date.getHours();
  //   let ampm = hours >= 12 ? "PM" : "AM";
  //   hours = hours % 12;
  //   hours = hours ? hours : "12";
  //   let minutes = date.getMinutes();
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   const timeFormat = hours + ":" + minutes + " " + ampm;
  //   setNewNotesData({
  //     ...newNotesData,
  //     time: timeFormat,
  //   });
  // }, []);

  // function handleCreateNotes(e) {
  //   setNewNotesData({
  //     ...newNotesData,
  //     note: e.target.value,
  //   });
  // }

  return (
    <>
      <div className="pocket_notes_homepg" style={{ display: "none" }}>
        <img src={bg_img} alt="bg_image" />
        <h2 className="default_heading">Pocket Notes</h2>
        <p style={{ marginTop: "5px" }}>
          Send and receive messages without keeping your phone online.
        </p>
        <p style={{ marginTop: "5px" }}>
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
        <p className="encryption">
          <img src={encrypImg} alt="encrypImg" style={{ width: "12px" }} />
          end-to-end encrypted
        </p>
      </div>
      <div className="show_notes">
        <div className="group_heading">
          <div className="gr_logo" style={{ backgroundColor: selectedColor }}>
            {grName.slice(0,2).toUpperCase()}
          </div>
          <p className="gr_name">{grName}</p>
        </div>
        <div className="notes_wrapper">
          <div className="notes">
            <div className="dateTime_wrapper">
              {/* <p>{newNotesData.time}</p>
              <p>{newNotesData.date}</p> */}
            </div>
            <div className="note_content">
              {/* <p>{newNotesData.note}</p> */}
            </div>
          </div>
        </div>
        <div className="teaxtarea_wrapper">
          <textarea
            rows="7"
            placeholder="Enter your text here.........."
            // value={newNotesData.note}
            // onChange={(e) => handleCreateNotes(e)}
          ></textarea>
          <img src={sendIcon} alt="sendIcon" />
        </div>
      </div>
    </>
  );
}
