import {html} from 'htm/preact';
import './TrashCard.css';

//${props.deletedVal.map((item)=> html` <li>${item.val}</li>`)}

const TrashCard = (props) => {
      return html `
         <div class='trashScreen'>
            <ul>
              
            </ul>
         </div>

      `;
};
export default TrashCard;