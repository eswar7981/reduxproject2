import classes from './Counter.module.css';
import { Actions } from '../store/store'
import {useSelector,useDispatch} from 'react-redux'


const Counter = () => {
  const dispatch=useDispatch()

  const incrementHandler=()=>{
    dispatch(Actions.increment(10))
  }

  const decrementHandler=()=>{
    dispatch(Actions.decrement(5))
  }
  


  const toggleCounterHandler = () => {};
  const counter=useSelector(state=>state.counter.counter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      <div className={classes.value}>{counter}</div>
      
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
   
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
