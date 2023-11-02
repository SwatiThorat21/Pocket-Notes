import Notes from "./components/Notes";
import GroupList from "./components/GroupList";
import "./App.css";

function App() {
  return (
    <div className="notes_container">
      <div className="group_details_container">
        <GroupList />
      </div>
      <div className="show_notes_container">
        <Notes />
      </div>
    </div>
  );
}

export default App;
