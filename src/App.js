import Notes from "./components/Notes";
import "./App.css";

function App() {
  return (
    <div className="notes_container">
      <div className="group_details_container">
        <h2 className="notes_title">Pocket Notes</h2>
        <div className="group_list_Wrapper">
          <button className="createNotes_btn">
            <span className="plusIcon">+</span>Create Notes Group
          </button>
          <div className="group_list">
            <div className="group">
              <div className="gr_logo"></div>
              <p className="gr_name">Cuvette Notes</p>
            </div>
            <div className="group">
              <div className="gr_logo"></div>
              <p className="gr_name">My personal group</p>
            </div>
            <div className="group">
              <div className="gr_logo"></div>
              <p className="gr_name">Javascript group</p>
            </div>
            <div className="group">
              <div className="gr_logo"></div>
              <p className="gr_name">HTML Group</p>
            </div>
            <div className="group">
              <div className="gr_logo"></div>
              <p className="gr_name">CSS Notes</p>
            </div>
            <div className="group">
              <div className="gr_logo"></div>
              <p className="gr_name">Cuvette Notes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="show_notes_container">
        <Notes />
      </div>
    </div>
  );
}

export default App;
