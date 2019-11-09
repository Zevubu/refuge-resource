import React, {useState} from 'react';

function Dummy(props){
 if(props.bol === true){
    return(
        
        <div>
            <h1>{props.title}</h1>
            <img style={{width:'400px', height:'400px'}}src={props.img} />
            <p>{props.text}</p>
        </div>
    )
 }else if (props.bol2 === true){
    return(
        
        <div>
            <h1>{props.title}</h1>
            <img style={{width:'400px', height:'400px'}}src={props.img} />
        </div>
    )
 }else if (props.bol3 === true){
     return(
        <div>
            <h1>{props.title}</h1>
            <img style={{width:'400px', height:'400px'}}src={props.img} />
        </div>
     )
 }
  else{
  return(
  <div>GoodBye World</div>
  )
 }
}


export default Dummy 