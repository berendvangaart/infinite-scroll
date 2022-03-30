import {useDispatch, useSelector} from "react-redux";

function App() {

  const dispatch = useDispatch()
  const state = useSelector((state) => state.counter)

  return (
    <>
      <input type="text"></input>
      <div>title</div>
      <div>title</div>
      <div>title</div>
      <div>Loading...</div>
      <div>Error!</div>
    </>
  );
}

export default App;
