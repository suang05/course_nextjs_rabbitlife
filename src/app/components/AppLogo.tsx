"use client"

import { useState } from "react";

export default function AppLogo() {
    const [title, setTitle] = useState<string>("My Logo");
    // const isShow = true;
    const [isShow, setIsShow] = useState<boolean>(false);


    const onHandleClick = () => {
        alert('test error!!!');
        setTitle('new My Logo');
        // setIsShow(!isShow);
        setIsShow((prev) => !prev); // prev คือค่าเดิม
        setIsShow((prev) => !prev); // prev คือค่าเดิม        
    }


    return (
        <div>
            <p>App Logo</p>
            {
                isShow && (<p className="text-red-500">Home Page</p>)
            }
            <p className="text-red-500">{title.toUpperCase()}</p>
            <p>{new Date().toISOString()}</p>
            <button onClick={onHandleClick}>Click Me</button>
        </div>
    );
}
