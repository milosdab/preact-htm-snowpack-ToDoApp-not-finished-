import {html} from 'htm/preact';
import {useState} from 'preact/hooks'
import './AddToDo.css';

const AddToDo = (props) => {
 
    const[inputValue,setInputValue]=useState('')
    

    const inputValueHandler = (event) => {
         setInputValue(event.target.value);

         
    }
    
    const addItemsHandler = () =>{
        
       if (inputValue.trim() === '' ? null : props.onGetValue(inputValue));
         
         
    }

     return html `
        
         <div class=addtodo> 
        <input class="inputadd"  onChange=${inputValueHandler}/> 
        <button class="btnadd" onClick=${addItemsHandler}> Add items </button>

        </div>
        
     `;

}
export default AddToDo