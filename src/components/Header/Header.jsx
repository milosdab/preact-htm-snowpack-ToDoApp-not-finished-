import {html} from "htm/preact";
import './Header.css'


const Header = () => {
    return html `
     <div class="headerDiv">
        <a href="/home">Home</a>
        <a href="/trash">Trash</a>
     </div>
    `;
};
export default Header;