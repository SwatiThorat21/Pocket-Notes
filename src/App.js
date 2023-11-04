import Notes from "./components/Notes/Notes";
import GroupList from "./components/groups/GroupList";
import "./App.css";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupData, setGroupData] = useState([
    {
      grName: "",
      selectedColor: "",
      notesData: [
        {
          time: "",
          date: "",
          note: "",
        },
      ],
    },
  ]);

  function handleOpen() {
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleChange(e, index) {
    const updatedGroupData = [...groupData];
    updatedGroupData[index].grName = e.target.value;
    setGroupData(updatedGroupData);
  }

  function handleColorClick(color, index) {
    const updatedGroupData = [...groupData];
    updatedGroupData[index].selectedColor = color;
    setGroupData(updatedGroupData);
  }
  // function handleAddNotes(newNotesData) {
  //   setGroupData({
  //     ...groupData,
  //     notesData: {
  //       ...groupData.notesData,
  //       ...newNotesData,
  //     },
  //   });
  // }
  console.log(groupData);
  return (
    <>
      {groupData.map((group, index) => (
        <div key={index}>
          <div className={`notes_container ${isModalOpen && "opaqueBack"}`}>
            <div className="group_details_container">
              <GroupList
                key={index}
                handleOpen={handleOpen}
                grName={group.grName}
                selectedColor={group.selectedColor}
              />
            </div>
            <div className="show_notes_container">
              <Notes
                grName={group.grName}
                selectedColor={group.selectedColor}
                notesData={group.notesData}
              />
            </div>
          </div>
          {isModalOpen && (
            <Modal
              handleClose={handleClose}
              grName={group.grName}
              handleChange={(e)=>handleChange(e, index)}
              handleColorClick={(color)=>handleColorClick(color,index)}
            />
          )}
        </div>
      ))}
    </>
  );
}

export default App;
