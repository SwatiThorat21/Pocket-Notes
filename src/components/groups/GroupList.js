import "./grouplist.css";
import "../../App.css"

export default function GroupList({
  handleOpen,
  groupData,
  setSelectedGroup,
  selectedGroup,
}) {
  function handleGroupClick(index) {
    setSelectedGroup(index);
  }
  return (
    <>
      <div>
        <h2 className="notes_title">Pocket Notes</h2>
        <div className="group_list_Wrapper">
          <button className="createNotes_btn" onClick={handleOpen}>
            <span className="plusIcon">+</span>Create Notes Group
          </button>
          <div
            className="group_list"
            style={{
              overflowY: groupData.length > 6 ? "scroll" : "hidden",
              maxHeight: "420px",
            }}
          >
            {groupData.length === 0 ? (
              <p className="noGroup_line">Please add notes group !!</p>
            ) : (
              groupData.map((group, index) => (
                <div
                  className={`group ${
                    index === selectedGroup && "selectedGroup"
                  }`}
                  key={index}
                  onClick={() => handleGroupClick(index)}
                >
                  <div
                    className="gr_logo"
                    style={{ backgroundColor: group.selectedColor }}
                  >
                    {group.grName.slice(0, 2).toUpperCase()}
                  </div>
                  <p className="gr_name">{group.grName}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
