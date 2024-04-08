import { NavLink } from "react-router-dom";
import "./Menu.css";
import { Links } from "../Links/Links";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<h2>קישורים מומלצים בנוגע לנעליים</h2>

            <Links />

        </div>
    );
}
