import { useEffect, useState, useRef } from 'react';
import './App.css'
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import Even from './component/Even';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleSetCount= (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleClear = () => {
    setCount(0); // count를 0으로 초기화
  };

  const didMountRef = useRef(false);

  useEffect(()=>{
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }else {
      console.log("컴포넌트 업데이트!");
    }
  });

  useEffect(()=>{
    console.log("컴포넌트 마운트");
  });

  useEffect(()=>{
    const intervalID = setInterval(()=>{
      console.log("깜빡");
    }, 3000);

    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    }
  });

  

  return (
  <div className="App">
    <h1>👾Monster Counter👾</h1>
    <section>
      <input value={text} onChange={handleChangeText} />
    </section>
    <section>
      <Viewer count={count} />
      {count % 2 === 0 && <Even />}
    </section>
    <section>
      <Controller handleSetCount={handleSetCount} />
    </section>
    <section>
        <button onClick={handleClear}>Clear</button> {/* 클리어 버튼 추가 */}
      </section>
  </div>
  );
}

export default App
