import React, { useState, useCallback, useMemo } from "react";
import "./App.scss";
import { ChildArea } from "./ChildArea";

function App() {
  const [text, setText] = useState("");
  const [onOff, setOnOff] = useState(false);

  const onChangeInputForm = e => {
    setText(e.target.value);
  };
  const onClickButton = () => {
    setOnOff(!onOff);
  };
  const onClickDisabledText=useCallback(()=>{
    setOnOff(false);
  }, [])
  // アロー関数は毎回新しい関数を生成されると判断される
  // useCallbackを使うことで、関数の中身が変わらない場合は、関数をそのまま使い回すことができる

  const temp=useMemo(()=>1+3, [])
  console.log(temp)
  // useMemoは変数のmemo化

  return (
    <div className="App">
      <input value={text} onChange={onChangeInputForm}></input>
      <br />
      <br />
      <button onClick={onClickButton}>display</button>

      <ChildArea open={onOff} onClickDisabledText={onClickDisabledText} />
      {/* prppsに関数を渡しているため、ChildAreaが毎回行使されたように振る舞いmemo化したのに再レンダリングされてしまう */}
    </div>
  );
}

export default App;
