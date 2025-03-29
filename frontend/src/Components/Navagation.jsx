
import {NavLink} from 'react-router-dom'
export default function Navagation() {
    return (
        <div>
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-between">
            <li>
                <NavLink to="/" className="text-white">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="text-white">About</NavLink>
            </li>
            </ul>
        </nav>
        </div>
    )
}