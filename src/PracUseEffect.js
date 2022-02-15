import { useEffect, useState } from "react";

function PracUseEffect() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    // 컴포넌트가 생성되는 첫 시작에만 실행됨
    console.log("I run only once");
  }, []);
  useEffect(() => {
    // keyword가 업데이트 될 때마다 실행됨
    if (keyword !== "" && keyword.length > 5) {
      console.log(`I run when 'keyword' changes.`);
    }
  }, [keyword]);
  useEffect(() => {
    // counter가 업데이트 될 때마다 실행됨
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    // keyword, counter가 업데이트 될 때마다 실행됨
    console.log("I run when counter & keyword changes.");
  }, [counter, keyword]);
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default PracUseEffect;