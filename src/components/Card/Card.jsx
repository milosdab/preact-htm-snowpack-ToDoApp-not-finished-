import {html} from 'htm/preact';
import './Card.css'
import CardItem from './CardItem';

const Card = (props) => {
    return (
      html `<div class="card">
          <div class="cardTitle">
              <h1>${props.title}</h1>
          </div>
          <div>
          ${props.items.map((cardItem) => {
            if (props.position === cardItem.position) {
              return (
               html ` <${CardItem} position=${cardItem.position} val=${cardItem.val} delete=${props.delete} id=${cardItem.id} move=${props.move} /> `
              );
            } else return;
          })}
          

          </div>
      </div>
    `);

};
export default Card;