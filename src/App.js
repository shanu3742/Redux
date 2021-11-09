
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {incNumber,decNumber} from './action/index'



function App() {
  const myState = useSelector((state) =>state.changeNumber)
  const dispatch = useDispatch()

  return (
    <div >
      <button onClick={() => dispatch(incNumber())}>+</button>
      {myState}
      <button onClick={() => dispatch(decNumber())}>-</button>
     
    </div>
  );
}

export default App;
