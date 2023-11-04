import "./modal.css";

export default function Modal({ handleClose, grName, handleChange, handleColorClick }) {
  function closeModal() {
    handleClose();
  }
  return (
    <>
      <div className="modal_container">
        <h2 className="modal_heading">Create New Notes group</h2>
        <div className="modal_grName_wrapper">
          <p>Group Name</p>
          <input
            type="text"
            placeholder="Enter your group name...."
            value={grName}
            onChange={(e)=>handleChange(e)}
          ></input>
        </div>
        <div className="modal_colors_wrapper">
          <p>Choose colour</p>
          <div className="colours_wrapper">
            <div
              style={{
                backgroundColor: "#B38BFA",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={()=>handleColorClick("#B38BFA")}
            ></div>
            <div
              style={{
                backgroundColor: "#FF79F2",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={()=>handleColorClick("#FF79F2")}
            ></div>
            <div
              style={{
                backgroundColor: "#43E6FC",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={()=>handleColorClick("#43E6FC")}
            ></div>
            <div
              style={{
                backgroundColor: "#F19576",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={()=>handleColorClick("#F19576")}
            ></div>
            <div
              style={{
                backgroundColor: "#0047FF",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={()=>handleColorClick("#0047FF")}
            ></div>
            <div
              style={{
                backgroundColor: "#6691FF",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={()=>handleColorClick("#6691FF")}
            ></div>
          </div>
        </div>
        <button className="create_btn" onClick={closeModal}>
          Create
        </button>
      </div>
    </>
  );
}
