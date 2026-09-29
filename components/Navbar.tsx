import NavLink from "./NavLink";

export default function Navbar(){
    return(
        <div className="flex flex-row items-center justify-center gap-2 w-full shadow-lg">
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/make-res'}>Make a reservation</NavLink>
            <NavLink href={'/reservation'}>Reservation</NavLink>
        </div>
    )
}