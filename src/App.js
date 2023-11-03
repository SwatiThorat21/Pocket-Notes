import Notes from "./components/Notes";
import GroupList from "./components/GroupList";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <div className="notes_container">
        <div className="group_details_container">
          <GroupList />
        </div>
        <div className="show_notes_container">
          <Notes />
        </div>
      </div>
      <div className="modal">
        <Modal />
      </div>
    </>
  );
}

export default App;
