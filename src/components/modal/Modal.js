import "./modal.css"

export default function Modal() {
  return (
    <>
      <div className="modal_container">
        <h2 className="modal_heading">Create New Notes group</h2>
        <div className="modal_grName_wrapper">
          <p>Group Name</p>
          <input type="text" placeholder="Enter your group name...."></input>
        </div>
        <div className="modal_colors_wrapper">
          <p>Choose colour</p>
          <div className="colours_wrapper">
            <div
              style={{
                "background-color": "#B38BFA",
                padding: "0.7rem",
                "border-radius": "50%",
              }}
            ></div>
            <div
              style={{
                "background-color": "#FF79F2",
                padding: "0.7rem",
                "border-radius": "50%",
              }}
            ></div>
            <div
              style={{
                "background-color": "#43E6FC",
                padding: "0.7rem",
                "border-radius": "50%",
              }}
            ></div>
            <div
              style={{
                "background-color": "#F19576",
                padding: "0.6rem",
                "border-radius": "50%",
              }}
            ></div>
            <div
              style={{
                "background-color": "#0047FF",
                padding: "0.7rem",
                "border-radius": "50%",
              }}
            ></div>
            <div
              style={{
                "background-color": "#6691FF",
                padding: "0.7rem",
                "border-radius": "50%",
              }}
            ></div>
          </div>
        </div>
        <button className="create_btn">Create</button>
      </div>
    </>
  );
}
