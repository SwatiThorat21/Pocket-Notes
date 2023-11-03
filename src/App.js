import Notes from "./components/Notes/Notes";
import GroupList from "./components/groups/GroupList";
import "./App.css";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [grName, setGrName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  
  function handleOpen() {
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleChange(e) {
    setGrName(e.target.value);
  }

  function handleColorClick(color){
    setSelectedColor(color)
  }
  return (
    <>
      <div className={`notes_container ${isModalOpen && "opaqueBack"}`}>
        <div className="group_details_container">
          <GroupList handleOpen={handleOpen} grName={grName} selectedColor={selectedColor} />
        </div>
        <div className="show_notes_container">
          <Notes grName={grName} selectedColor={selectedColor} />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          handleClose={handleClose}
          grName={grName}
          handleChange={handleChange}
          handleColorClick={handleColorClick}
        />
      )}
    </>
  );
}

export default App;
