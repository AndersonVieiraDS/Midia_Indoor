import * as React from 'react';
import './buttonSalve.css'


// export default function ButtonSalve({ text }) {
//    return (
//       <form>
//          <div id="botao">
//             <input type="submit" name="botao" value={text} className="buttonSalve" />
//          </div>
//       </form>
//    )
// }

export default function ButtonSalve({ text, onClick }) {
   return (
     <button type="submit" className="buttonSalve" onClick={onClick}>
       {text}
     </button>
   );
 }