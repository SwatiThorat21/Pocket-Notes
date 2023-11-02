import bg_img from "../images/bg_image.png";

export default function GetNotes() {
  return (
    <>
      <div className="pocket_notes_homepg">
        <img src={bg_img} alt="bg_image" />
        <h2>Pocket Notes</h2>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
    </>
  );
}
