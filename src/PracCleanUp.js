import { useEffect, useState } from "react";

function Hello() {
  /*
  const byeFn = () => {
    console.log("bye :<");
  }
  const hiFn = () => {
    console.log("created :)");
    return byeFn;
  }
  useEffect(hiFn, []);
  */
  // 주석처리한 위 코드와 같은 아래 코드
  useEffect(() => {
    console.log("created :)");
    return () => console.log("bye :<");
  }, []);
  return <h1>Hello</h1>;
}

function PracCleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default PracCleanUp;