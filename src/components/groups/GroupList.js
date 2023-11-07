import "./grouplist.css";
export default function GroupList({
  handleOpen,
  groupData,
  setSelectedGroup,
  selectedGroup,
}) {
  function handleGroupClick(index) {
    setSelectedGroup(index);
    console.log(selectedGroup);
  }
  return (
    <>
      <div>
        <h2 className="notes_title">Pocket Notes</h2>
        <div className="group_list_Wrapper">
          <button className="createNotes_btn" onClick={handleOpen}>
            <span className="plusIcon">+</span>Create Notes Group
          </button>
          <div className="group_list">
            {groupData.length === 0 ? (
              <p className="noGroup_line">Please add notes group !!</p>
            ) : (
              groupData.map((group, index) => (
                <div className="group" key={index} onClick={()=>handleGroupClick(index)}>
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
