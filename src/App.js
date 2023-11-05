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
  const [newGroupName, setNewGroupName] = useState("");
  const [newSelectedColor, setNewSelectedColor] = useState("");
  const [newNotesData, setNewNotesData] = useState([
    {
      time: "",
      date: "",
      note: "",
    },
  ]);

  function handleOpen() {
    setIsModalOpen(true);
  }

  function handleSubmit() {
    if (newGroupName.trim() !== "") {
      const newGroup = {
        grName: newGroupName,
        selectedColor: newSelectedColor,
        notesData: newNotesData,
      };
      setGroupData([...groupData, newGroup]);
      setNewGroupName("");
    }
    setIsModalOpen(false);
  }
  console.log(groupData);
  return (
    <>
      <div>
        <div className={`notes_container ${isModalOpen && "opaqueBack"}`}>
          <div className="group_details_container">
            <GroupList handleOpen={handleOpen} groupData={groupData} />
          </div>
          <div className="show_notes_container">
            {groupData.map((group, index) => (
              <Notes
                key={index}
                grName={group.grName}
                selectedColor={group.selectedColor}
                newNotesData={newNotesData}
                setNewNotesData={setNewNotesData}
              />
            ))}
          </div>
        </div>
        {isModalOpen && (
          <Modal
            setNewGroupName={setNewGroupName}
            handleSubmit={handleSubmit}
            newSelectedColor={newSelectedColor}
            setNewSelectedColor={setNewSelectedColor}
          />
        )}
      </div>
    </>
  );
}

export default App;
