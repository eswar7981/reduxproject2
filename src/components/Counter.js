import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
const Counter = () => {
  const dispatch=useDispatch()

  const incrementHandler=()=>{
    dispatch({type:'increment'})
  }

  const decrementHandler=()=>{
    dispatch({type:'decrement'})
  }
  
  const decrementby5Handler=()=>{
    dispatch({type:'decrementby5'})
  }

  const incrementby5Handler=()=>{
    dispatch({type:'incrementby5'})
  }

  const toggleCounterHandler = () => {};
  const counter=useSelector(state=>state.counter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      <div className={classes.value}>{counter}</div>
      
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={incrementby5Handler}>incrementby5</button>
      <button onClick={decrementby5Handler}>decrementby5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
