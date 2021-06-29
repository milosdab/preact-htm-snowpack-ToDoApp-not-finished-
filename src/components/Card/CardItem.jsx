import {html} from 'htm/preact';
import './CardItem.css';

const CardItem = (props) => {

    
   return (
      html ` <div class="cardItem">
        ${props.position === 'one' ? html`<button class="del" onClick=${()=>{props.delete(props.id)}}>Delete</button>` : null}
        ${props.position === 'two' ? html`<button class="for" onClick=${()=>{props.move(props.id,"backwards")}}>Backwards</button>` : null}
        ${props.position === 'three' ? html`<button class="for" onClick=${()=>{props.move(props.id,"backwards")}}>Backwards</button>` : null}

        <p>${props.val}</p>

        
        ${props.position === 'one' ? html`<button class="for" onClick=${()=>{props.move(props.id,"forwards")}}>Forward</button>` : null}
        ${props.position === 'two' ? html`<button class="for" onClick=${()=>{props.move(props.id,"forwards")}}>Forward</button>` : null}
        ${props.position === 'three' ? html`<button class="del" onClick=${()=>{props.delete(props.id)}}>Delete</button>` : null}
       </div> `
   );
}

export default CardItem;