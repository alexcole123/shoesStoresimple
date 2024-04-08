import { Home } from "../../HomeArea/Home/Home";
import { Copyrights } from "../Copyrights/Copyrights";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
                <Header />
            </header>

            <main>
                <Home />
            </main>

            <aside>
                <Menu />
            </aside>


            <footer>
                <Copyrights />
            </footer>


        </div>
    );
}
