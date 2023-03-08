import React, {useState} from 'react';

import {useAppDispatch, useAppSelector} from "./app/hooks";
import Sidebar from "./components/Sidebar";
import WorkSpace from "./components/WorkSpace";
// import 'react-quill/dist/quill.snow.css';

function App() {

    return (
        <div className="App">
            <div className="container">
                <Sidebar/>
                <WorkSpace/>
            </div>
        </div>
    );
}

export default App;
