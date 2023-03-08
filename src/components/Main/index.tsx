import React from 'react';
import Sidebar from "../Sidebar";
import WorkSpace from "../WorkSpace";

const Main = () => {
    return (
        <div className="container">
            <Sidebar/>
            <WorkSpace/>
        </div>
    );
};

export default Main;