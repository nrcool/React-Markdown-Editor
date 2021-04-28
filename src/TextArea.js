import React from "react";

export default function TextArea({ text, setText }) {
  return (
    <>
      <textarea
        value={text}
        style={{ width: "100%", height: "400px", padding: "10px" }}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <img
        src="https://iconarchive.com/download/i7969/hopstarter/soft-scraps/Button-Refresh.ico"
        width="30px"
        alt=""
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          cursor: "pointer",
        }}
        onClick={() => setText("")}
      />
    </>
  );
}
