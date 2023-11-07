import Notes from "./components/Notes/Notes";
import GroupList from "./components/groups/GroupList";
import "./App.css";
import Modal from "./components/modal/Modal";
import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupData, setGroupData] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");
  const [newSelectedColor, setNewSelectedColor] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(0);

  const ref = useClickAway(() => {
    setIsModalOpen(false);
  });

  function handleOpen() {
    setIsModalOpen(true);
  }

  function handleGroupSubmit() {
    if (newGroupName.trim() !== "") {
      const newGroup = {
        grName: newGroupName,
        selectedColor: newSelectedColor,
        notesData: [],
      };
      setGroupData([...groupData, newGroup]);
      setSelectedGroup(groupData.length);
      setNewGroupName("");
    }
    setIsModalOpen(false);
  }

  // console.log(groupData);
  return (
    <>
      <div>
        <div className={`notes_container ${isModalOpen && "opaqueBack"}`}>
          <div className="group_details_container">
            <GroupList
              handleOpen={handleOpen}
              groupData={groupData}
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
            />
          </div>
          <div className="show_notes_container">
            <Notes
              groupData={groupData}
              setGroupData={setGroupData}
              selectedGroup={selectedGroup}
            />
          </div>
        </div>
        {isModalOpen && (
          <dialog ref={ref} className="modal_container">
            <Modal
              setNewGroupName={setNewGroupName}
              handleGroupSubmit={handleGroupSubmit}
              newSelectedColor={newSelectedColor}
              setNewSelectedColor={setNewSelectedColor}
            />
          </dialog>
        )}
      </div>
    </>
  );
}

export default App;
