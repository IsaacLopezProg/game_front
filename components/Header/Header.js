import Menu from "./Menu"
import Topbar from "./Topbar"

export default function Header() {
    return (
        <>
            <div className="relative shadow-xl  z-10 bg-amber-800">
                <Topbar />
                <Menu />
            </div>
        </>
    )
}
