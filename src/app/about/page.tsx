import AppHeader from "../components/AppHeader"

export default function AboutPage() {

    return (
        <div>
            <AppHeader title="hello world" isShowSubTitle/>
            <br/>
            <AppHeader title="hello world" isShowSubTitle={false}/>
            <br/>
            <p>This is About.</p>
        </div>
    )
}