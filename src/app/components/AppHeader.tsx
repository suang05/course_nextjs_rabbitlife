type AppHeaderProps = {
    title: string;
    isShowSubTitle?: boolean;
}

export default function AppHeader( {title, isShowSubTitle} : AppHeaderProps ) {

    isShowSubTitle = true;

    return (
        <div>
            <p>{title}</p>
            {isShowSubTitle && <p>show sub title</p>}
        </div>
    )
}