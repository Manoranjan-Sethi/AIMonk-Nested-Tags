import React, { useState } from "react";
import "./ShowData.css";

function ShowData({ data }) {
  //   console.log(data);

  const [expand, setExpand] = useState(false);
  const [input, setInput] = useState({
    visible: false,
  });

  const handleChild = (e) => {
    e.stopPropagation(e);
    setExpand(true);
    setInput({
      visible: true,
    });
  };

  const addChild = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setInput({ ...input, visible: false });
    }
  };

  return (
    <div>
      <div className="main-root">
        <div className="sub-root" onClick={() => setExpand(!expand)}>
          <div>
            <span>&rarr;</span>
          </div>
          <div>
            <span>{data.name}</span>
          </div>
        </div>
        <div>
          <button onClick={(e) => handleChild(e)}>Add Child</button>
        </div>
      </div>
      <div
        style={{
          display: expand ? "block" : "none",
          paddingLeft: "20px",
        }}
      >
        {input.visible && (
          <div className="container">
            <input
              type="text"
              className="input-box"
              autoFocus
              onKeyDown={addChild}
              onBlur={() => setInput({ ...input, visible: false })}
            />
          </div>
        )}
        <span className="sub-child"> {data.data}</span>
        {data.children?.map((ele, i) => {
          return <ShowData data={ele} key={i} />;
        })}
      </div>
    </div>
  );
}

export default ShowData;
