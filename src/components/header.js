import logo from '../logoVersion1.svg';
import './header.css';


export default function Header (){
    return (
        <div>
            <img src={logo} className="logo" alt="Entre mareas"/>
        </div>
    )
}