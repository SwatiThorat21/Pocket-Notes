import Notes from "./components/Notes/Notes";
import GroupList from "./components/groups/GroupList";
import "./App.css";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupData, setGroupData] = useState({
    grName: "",
    selectedColor: "",
    notesData: {
      time: "",
      date: "",
      note: "",
    },
  });

  function handleOpen() {
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleChange(e) {
    setGroupData({
      ...groupData,
      grName: e.target.value,
    });
  }

  function handleColorClick(color) {
    setGroupData({
      ...groupData,
      selectedColor: color,
    });
  }
  function handleAddNotes(){
    setGroupData({
      ...groupData,
      
    })
  }
  return (
    <>
      <div className={`notes_container ${isModalOpen && "opaqueBack"}`}>
        <div className="group_details_container">
          <GroupList
            handleOpen={handleOpen}
            grName={groupData.grName}
            selectedColor={groupData.selectedColor}
          />
        </div>
        <div className="show_notes_container">
          <Notes
            grName={groupData.grName}
            selectedColor={groupData.selectedColor}
            notesData={groupData.notesData}
            handleAddNotes={handleAddNotes}
          />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          handleClose={handleClose}
          grName={groupData.grName}
          handleChange={handleChange}
          handleColorClick={handleColorClick}
        />
      )}
    </>
  );
}

export default App;
