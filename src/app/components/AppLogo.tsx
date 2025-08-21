"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function AppLogo() {
    const [title, setTitle] = useState<string>("My Logo");
    // const isShow = true;
    const [isShow, setIsShow] = useState<boolean>(false);
    const [user, setUser] = useState({id:1, name: 'John'})


    const onHandleClick = () => {
        alert('test error!!!');
        setTitle('new My Logo');
        // setIsShow(!isShow);
        setIsShow((prev) => !prev); // prev คือค่าเดิม
        setIsShow((prev) => !prev); // prev คือค่าเดิม      
        setUser((prev) => ({
            ...prev,
            name: 'Mary'
            }) 
        )  
    }


    return (
        <div>
            <p>App Logo</p>
            {JSON.stringify(user)}
            {
                isShow && (<p className="text-red-500">Home Page</p>)
            }
            <p className="text-red-500">{title.toUpperCase()}</p>
            {/* <p>{new Date().toISOString()}</p> */}
            {/* <button onClick={onHandleClick}>Click Me</button> */}

            <Button size='lg' onClick={() => {
                toast.success('check toast')
            }}>check toast</Button>
        </div>
    );
}
