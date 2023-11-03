import bg_img from "../../images/bg_image.png";
import encrypImg from "../../images/encryp.png";
import sendIcon from "../../images/sendIcon.png";
import "./notes.css";

export default function GetNotes({ grName, selectedColor }) {
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
            {grName.slice(0, 2).toUpperCase()}
          </div>
          <p className="gr_name">{grName}</p>
        </div>
        <div className="notes_wrapper">
          <div className="notes">
            <div className="dateTime_wrapper">
              <p>10:10 Am</p>
              <p>9 March 2023</p>
            </div>
            <div className="note_content">
              <p>
                Another productive way to use this tool to begin a daily writing
                routine. One way is to generate a random paragraph with the
                intention to try to rewrite it while still keeping the original
                meaning. The purpose here is to just get the writing started so
                that when the writer goes onto their day's writing projects,
                words are already flowing from their fingers.
              </p>
            </div>
          </div>
          <div className="notes">
            <div className="dateTime_wrapper">
              <p>10:10 Am</p>
              <p>9 March 2023</p>
            </div>
            <div className="note_content">
              <p>
                Another productive way to use this tool to begin a daily writing
                routine. One way is to generate a random paragraph with the
                intention to try to rewrite it while still keeping the original
                meaning. The purpose here is to just get the writing started so
                that when the writer goes onto their day's writing projects,
                words are already flowing from their fingers.
              </p>
            </div>
          </div>
          <div className="notes">
            <div className="dateTime_wrapper">
              <p>10:10 Am</p>
              <p>9 March 2023</p>
            </div>
            <div className="note_content">
              <p>
                Another productive way to use this tool to begin a daily writing
                routine. One way is to generate a random paragraph with the
                intention to try to rewrite it while still keeping the original
                meaning. The purpose here is to just get the writing started so
                that when the writer goes onto their day's writing projects,
                words are already flowing from their fingers.
              </p>
            </div>
          </div>
        </div>
        <div className="teaxtarea_wrapper">
          <textarea
            rows="7"
            placeholder="Enter your text here.........."
          ></textarea>
          <img src={sendIcon} alt="sendIcon" />
        </div>
      </div>
    </>
  );
}
