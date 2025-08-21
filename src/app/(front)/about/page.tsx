// "use client"

import Link from "next/link"
// import AppHeader from "../components/AppHeader"
import dynamic from "next/dynamic"
import type { Metadata } from 'next'
import Image from "next/image"
import myImageLoader from "@/utils/loader"
// import { charmSans } from "../../layout"
// import AppLogo from "../../components/AppLogo"

// export const metadata: Metadata = {
//     title: 'เกี่ยวกับเรา',
//     description: '...',
// }

export default function AboutPage() {

    // const WithAppHeaderLoading = dynamic(
    //     () => import('../../components/AppHeader'),
    //     {
    //         loading: () => <p>Loading...</p>,
    //         // ssr: false
    //     }
    // )

    return (
        <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0 py-10">
            {/* <WithAppHeaderLoading title="hello world" isShowSubTitle/>
            <br/>
            <WithAppHeaderLoading title="hello world" isShowSubTitle={false}/>
            <br/>
            <p className={`${charmSans.className}`}>This is About.</p> */}
            <br />
            <Link href={'/'} className="text-red-500">Home</Link>
            <Image
                loader={myImageLoader}
                src="/img-rabbit-macot.png"
                width={0}
                height={0}
                alt="Picture of the author"
                style={{ width: 250, height: 400}}
                priority
            />
            {/* <AppLogo /> */}
        </div>
    )
}