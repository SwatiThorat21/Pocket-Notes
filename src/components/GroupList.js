export default function GroupList() {
  return (
    <>
      <div>
        <h2 className="notes_title">Pocket Notes</h2>
        <div className="group_list_Wrapper">
          <button className="createNotes_btn">
            <span className="plusIcon">+</span>Create Notes Group
          </button>
          <div className="group_list">
            <div className="group">
              <div className="gr_logo">CN</div>
              <p className="gr_name">Cuvette Notes</p>
            </div>
            <div className="group">
              <div className="gr_logo">MP</div>
              <p className="gr_name">My personal group</p>
            </div>
            <div className="group">
              <div className="gr_logo">JG</div>
              <p className="gr_name">Javascript group</p>
            </div>
            <div className="group">
              <div className="gr_logo">HG</div>
              <p className="gr_name">HTML Group</p>
            </div>
            <div className="group">
              <div className="gr_logo">CN</div>
              <p className="gr_name">CSS Notes</p>
            </div>
            <div className="group">
              <div className="gr_logo">CN</div>
              <p className="gr_name">Cuvette Notes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
