import { useState } from "react";
import bg_img from "../../images/bg_image.png";
import encrypImg from "../../images/encryp.png";
import sendIcon from "../../images/sendIcon.png";
import "./notes.css";
import "../../App.css"

export default function Notes({ groupData, selectedGroup, setGroupData }) {
  const [note, setNote] = useState("");

  function getCurrentDate() {
    const todaysDate = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = todaysDate.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : "12";
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const timeFormat = hours + ":" + minutes + " " + ampm;
    return timeFormat;
  }

  function handleNoteSubmit() {
    if (note.trim() !== "") {
      const newNote = {
        time: getCurrentTime(),
        date: getCurrentDate(),
        note: note,
      };
      const newGroupData = [...groupData];
      newGroupData[selectedGroup].notesData.push(newNote);
      setGroupData(newGroupData)
      setNote("");
    }
  }
  return (
    <>
      {groupData.length === 0 ? (
        <div className="pocket_notes_homepg">
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
      ) : (
        <div className="show_notes">
          {groupData && (
            <div className="group_heading">
              <div
                className="gr_logo"
                style={{
                  backgroundColor: groupData[selectedGroup].selectedColor,
                }}
              >
                {groupData[selectedGroup].grName.slice(0, 2).toUpperCase()}
              </div>
              <p className="gr_name">{groupData[selectedGroup].grName}</p>
            </div>
          )}
          <div className="notes_wrapper"  style={{
              overflowY: groupData[selectedGroup].notesData.length > 3 ? "scroll" : "hidden",
              maxHeight: "300px",
            }}>
            {groupData[selectedGroup].notesData.map((noteData, index) => (
              <div className="notes" key={index}>
                <div className="dateTime_wrapper">
                  <p>{noteData.time}</p>
                  <p>{noteData.date}</p>
                </div>
                <div className="note_content">
                  <p>{noteData.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="teaxtarea_wrapper">
            <textarea
              rows="7"
              placeholder="Enter your text here.........."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleNoteSubmit();
                }
              }}
            ></textarea>
            <img src={sendIcon} alt="sendIcon" onClick={handleNoteSubmit} />
          </div>
        </div>
      )}
    </>
  );
}
