import Notes from "./components/Notes/Notes";
import GroupList from "./components/groups/GroupList";
import "./App.css";
import Modal from "./components/modal/Modal";

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
      <div className="modal" style={{"display":"none"}}>
        <Modal />
      </div>
    </>
  );
}

export default App;
