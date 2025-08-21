"use client"
import { useEffect, useState } from "react";

type AppHeaderProps = {
    title: string;
    isShowSubTitle?: boolean;
}

export default function AppHeader( {title, isShowSubTitle} : AppHeaderProps ) {

    const [company, setCompany] = useState('');

    const onHandlerMouseOver = () =>{
        setCompany('Rabbit Life');
    }; 

    useEffect(() => {
        console.log('แบบที่ 1 ทำซ้ำทุกครั้งที่มีการ re-rander');
    });

    useEffect(() => {
        console.log('แบบที่ 2 ทำแค่ครั้งเดียว');
    }, []);

    useEffect(() => {
        console.log('แบบที่ 3 ทำครั้งแรก และทำซ้ำเมื่อ company เปลี่ยนค่า');
    }, [company]);

    useEffect(() => {
        console.log('แบบที่ 4 อย่าลืมทำ clean up');
        const id = setInterval(() => {
            console.log('count Interval');
        }, 200)
        //  setTimeout อย่าลืม clearTimeout
        //  subscribe อย่าลืม unsubscribe
        //  setInterval อย่าลืม clearInterval
        return () => {
            console.log('clean up');
            clearInterval(id);

        }
    });

    return (
        <div>
            <p>{company}</p>
            <p onMouseOver={onHandlerMouseOver} className="text-blue-500">{title}</p>
            {isShowSubTitle && <p>show sub title</p>}
        </div>
    )
}