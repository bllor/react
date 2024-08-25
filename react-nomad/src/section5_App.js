import { func } from "prop-types";
import Button from "./Button";
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);

  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const iRunOnlyOnce = () => {
    console.log("iRunOnlyOnce");
  };

  useEffect(() => {
    console.log("search for ", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("count for", counter);
  }, [counter]);

  useEffect(() => {
    console.log("both change");
  }, [keyword, counter]);

  useEffect(iRunOnlyOnce, []);

  const [showing, setShowing] = useState(false);

  const onClick2 = () => {
    setShowing(!showing);
  };

  function Hi() {
    function hiFn() {
      console.log("create");
      return byeFn;
    }
    function byeFn() {
      console.log("destroy");
    }
    useEffect(hiFn, []);
    return <h1>"Hi"</h1>;
  }

  return (
    <div className="App">
      <input
        onChange={onChange}
        type="text"
        placeholder="Search Here..."
        value={keyword}
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {showing ? <Hi /> : null}
      <button onClick={onClick2}>{!showing ? "showing" : "hide"}</button>
    </div>
  );
}

export default App;
/*
react app을 사용하면 자동으로 재시작이 되고 ,src를 추가해주지 않아도 된다.

컴포넌트가 초기에 로딩될 때만 실행이 되고 , 그 다음부터는 실행이 안되게 만들고 싶을 때 effects를 사용
api에서 데이터를 받아오면, 데이터를 받아온 곳은 처음에만 로딩되고 그 다음부터 로딩되게 하고 싶지 않을 때 사용
특정 코드를 처음에만 랜딩하고 그 다음부터는 랜딩하지 않을 때 useEffect를 사용
useEffect(function, []); 다음과 같은 형식으로 사용하면 처음에만 랜딩된다.

useState가 여러 개 있을 때, 한 개가 바뀌면 모두가 같이 변한다.
useState의 변화가 있는 곳만 원하는 코도를 실행시키고 싶으면 useEffect(function,[])에서 []에 조건을 준다. 

 useEffect(() => {
    console.log("search for ", keyword);
  }, [keyword]);
keyword가 변할 때마다 useEffect가 실행이 된다.


cleanup function
function Hi() {
    function hiFn() {
      console.log("create");
      return byeFn;
    }
    function byeFn() {
      console.log("destroy");
    }
    useEffect(hiFn, []);
    return <h1>"Hi"</h1>;
  }
  hide 될 때도 destroy라는 콘솔을 보내준다.
*/
