import { Brands } from "../Brands/Brands";
import { Discount } from "../Discount/Discount";
import "./Home.css";

export function Home(): JSX.Element {
    
    
    
    return (
        <div className="Home">
            <Discount />
            <iframe src="https://www.youtube.com/embed/IwzbV1btK5w?si=vAFreaeinDrho9yx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <Brands />
        </div>
    );
}
