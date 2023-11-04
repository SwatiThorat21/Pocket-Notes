import "./grouplist.css";
export default function GroupList({ handleOpen, grName, selectedColor }) {
  return (
    <>
      <div>
        <h2 className="notes_title">Pocket Notes</h2>
        <div className="group_list_Wrapper">
          <button className="createNotes_btn" onClick={handleOpen}>
            <span className="plusIcon">+</span>Create Notes Group
          </button>
          <div className="group_list">
            <div className="group">
              <div
                className="gr_logo"
                style={{ backgroundColor: selectedColor }}
              >
                {grName.slice(0,2).toUpperCase()}
              </div>
              <p className="gr_name">{grName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
