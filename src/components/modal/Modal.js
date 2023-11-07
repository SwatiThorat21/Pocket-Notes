import "./modal.css";

export default function Modal({
  handleGroupSubmit,
  setNewGroupName,
  newGroupName,
  setNewSelectedColor,
  error,
  setError,
  newSelectedColor,
}) {
  function handleInputChange(e) {
    setNewGroupName(e.target.value);
    if (e.target.value.trim() !== "") {
      setError(false);
    }
  }
  return (
    <>
      <div>
        <h2 className="modal_heading">Create New Notes group</h2>
        <div className="modal_grName_wrapper">
          <p>Group Name</p>
          <input
            type="text"
            placeholder="Enter your group name...."
            value={newGroupName}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="modal_colors_wrapper">
          <p>Choose colour</p>
          <div className="colours_wrapper">
            <div
              className={
                newSelectedColor === "#B38BFA" ? `${"selctedColor"}` : ""
              }
              style={{
                backgroundColor: "#B38BFA",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={() => setNewSelectedColor("#B38BFA")}
            ></div>
            <div
              className={
                newSelectedColor === "#FF79F2" ? `${"selctedColor"}` : ""
              }
              style={{
                backgroundColor: "#FF79F2",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={() => setNewSelectedColor("#FF79F2")}
            ></div>
            <div
               className={
                newSelectedColor === "#43E6FC" ? `${"selctedColor"}` : ""
              }
              style={{
                backgroundColor: "#43E6FC",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={() => setNewSelectedColor("#43E6FC")}
            ></div>
            <div
              className={
                newSelectedColor === "#F19576" ? `${"selctedColor"}` : ""
              }
              style={{
                backgroundColor: "#F19576",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={() => setNewSelectedColor("#F19576")}
            ></div>
            <div
               className={
                newSelectedColor === "#0047FF" ? `${"selctedColor"}` : ""
              }
              style={{
                backgroundColor: "#0047FF",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={() => setNewSelectedColor("#0047FF")}
            ></div>
            <div
               className={
                newSelectedColor === "#6691FF" ? `${"selctedColor"}` : ""
              }
              style={{
                backgroundColor: "#6691FF",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
              onClick={() => setNewSelectedColor("#6691FF")}
            ></div>
          </div>
        </div>
        {error ? <p className="errorMsg">Please enter valid details !</p> : ""}
        <button className="create_btn" onClick={handleGroupSubmit}>
          Create
        </button>
      </div>
    </>
  );
}
