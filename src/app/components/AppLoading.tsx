import { LoaderCircle, LoaderIcon } from "lucide-react";

export default function AppLoading() {
    return (
        <div className="mx-auto max-w-xl mt-20">
            <LoaderCircle size={40} className="animate-spin" />
        </div>
    );
}