import React, {useState} from 'react';

function Dummy(props){
 if(props.rend === true){
    return(
        
        <div>
            Hello World!
        </div>
    )
 } else{
  return(
  <div>GoodBye World</div>
  )
 }
}


export default Dummy 