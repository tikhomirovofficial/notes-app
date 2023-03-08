import React, {useState} from 'react';
import ReactQuill from "react-quill";

const Editor = () => {
    const [value, setValue] = useState('');

    return <ReactQuill style={{background: "inherit"}} theme="snow" value={value} onChange={setValue} />;
};

export default Editor;