import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  //  useDispatch returns a function which can be used to dispatch
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//Concepts:
// for selecting the piece of state a components needs to have or manipulate, we need to
// use useSelector hook from react-redux. state is passed to it by redux, we need to take out our peice by accessing state object.
// in the above example, we took state.counter piece.

// then we need to dispatch our actions based on requirements. For that , we need to use useDispatch hook from react-redux.
// this function returns a function which is used to dispatch the actions.
// in the above example, we took const dispatch = useDispatch()

// we use the this method to dispatch actions in event handlers.
// in the above example, decrementHandler, incrementHandler so on,

//dispatch takes an action object with "type" key->
//in the above example, dispatch({type: "increment"}) so on. the type should match the thing in the reducer u have written in the store file. here
//index.js

//Use of redux/ writing actions if CLass based components.
//
// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   };
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// //the equivalent of useSelector({counter : state.counter}) in functional component.
//
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
//
// //the equivalent of useDispatch() hook in the functional component;
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
