import React from 'react';

import {useAppDispatch, useAppSelector} from "./app/hooks";
import {CounterState, decrement, increment} from "./features/counter/counterSlice";


function App() {
    const dispatch = useAppDispatch()
    const counter = useAppSelector<CounterState>(state => state.counter)

    return (
        <div className="App">
            <div>{counter.value}</div>
            <button onClick={() => dispatch(increment())}>plus</button>
            <button onClick={() => dispatch(decrement())}>minus</button>
        </div>
    );
}

export default App;
