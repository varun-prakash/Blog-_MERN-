import "./Write.css";

export default function Write() {
  return (
    <div className="write">
      <div className="writeForm">
        <div className="formGroup">
          <label htmlFor="fileInput">
            <i className=" writeFile fas fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            autoFocus={true}
            placeholder="Title"
            className="writeInput"
          />
        </div>
        <div className="formGroup">
          <textarea
            placeholder="Express yourself here..."
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="submit">Publish</button>
      </div>
    </div>
  );
}
