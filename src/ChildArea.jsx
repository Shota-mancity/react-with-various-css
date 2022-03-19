import React, {memo} from "react";

const style={
    width: "100%",
    height: "200px",
    backgroundColor: "khaki",
}

export const ChildArea = memo(props => {
  const { open, onClickDisabledText } = props;
  const data=[...Array(2000).keys()]
  console.log("ChildArea is rendered!")
  data.forEach(()=>{
    console.log("...");
})

  return (
    <>
      {open ? (
        <div style={style} >
          <p >child component</p>
          <button onClick={onClickDisabledText}>Close</button>
        </div>
      ) : null}
    </>
  );
});
