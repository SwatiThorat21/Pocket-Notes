import Notes from "./components/Notes/Notes";
import GroupList from "./components/groups/GroupList";
import MobileNotes from "./components/MobileNotes";
import "./App.css";
import Modal from "./components/modal/Modal";
import { useState, useEffect } from "react";
import { useClickAway } from "@uidotdev/usehooks";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupData, setGroupData] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");
  const [newSelectedColor, setNewSelectedColor] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(0);
  const [error, setError] = useState(false);
  const[showMobileNotes, setShowMobileNotes] = useState(false);

  const ref = useClickAway(() => {
    if (!error) {
      setIsModalOpen(false);
    }
  });

  useEffect(() => {
    const storedData = JSON.parse(window.localStorage.getItem("groupData"));
    const selectedGroup = JSON.parse(
      window.localStorage.getItem("selectedGroup")
    );
    if (storedData) {
      setGroupData(storedData);
      setSelectedGroup(selectedGroup);
    }
  }, []);

  useEffect(() => {
    if (groupData.length !== 0) {
      window.localStorage.setItem("groupData", JSON.stringify(groupData));
      window.localStorage.setItem(
        "selectedGroup",
        JSON.stringify(selectedGroup)
      );
    }
  }, [groupData, selectedGroup]);

  function handleOpen() {
    setError(false);
    setIsModalOpen(true);
  }

  function handleGroupSubmit() {
    if (newGroupName.trim() !== "" && newSelectedColor) {
      const newGroup = {
        grName: newGroupName,
        selectedColor: newSelectedColor,
        notesData: [],
      };
      setGroupData([...groupData, newGroup]);
      setSelectedGroup(groupData.length);
      setNewGroupName("");
      setNewSelectedColor("");
      setIsModalOpen(false);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div>
        <div className={`notes_container ${isModalOpen && "opaqueBack"}`}>
         {!showMobileNotes && <div className="group_details_container">
            <GroupList
              handleOpen={handleOpen}
              groupData={groupData}
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              setShowMobileNotes={setShowMobileNotes}
            />
          </div>}
          <div className="show_notes_container">
            <Notes
              groupData={groupData}
              setGroupData={setGroupData}
              selectedGroup={selectedGroup}
            />
          </div>
          {showMobileNotes && <div className="mobile_show_notes_container">
            <MobileNotes
              groupData={groupData}
              setGroupData={setGroupData}
              selectedGroup={selectedGroup}
            />
          </div>}
        </div>
        {isModalOpen && (
          <dialog ref={ref} className="modal_container">
            <Modal
              setNewGroupName={setNewGroupName}
              handleGroupSubmit={handleGroupSubmit}
              newSelectedColor={newSelectedColor}
              setNewSelectedColor={setNewSelectedColor}
              error={error}
              setError={setError}
              newGroupName={newGroupName}
            />
          </dialog>
        )}
      </div>
    </>
  );
}

export default App;
