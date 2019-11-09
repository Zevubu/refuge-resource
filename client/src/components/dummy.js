import React, {useState} from 'react';
import { yieldExpression } from '@babel/types';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PetsIcon from '@material-ui/icons/Pets';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

function Dummy(props){
//  if(props.bol === true && props.rend1 === true){
    return(
        
        <div>
            <h1>{props.title}</h1>
            <h3>Located @:{props.location}</h3>
            <h2>Offering:
             {props.house ? <Chip label='Housing'/> : ''}&nbsp;
             {props.food ? <Chip label='Food'/> : ''}&nbsp;
             {props.clothing ? <Chip label='Clothing'/> : ''}&nbsp;
             {props.items ? <Chip label='Household-Items'/> : ''}&nbsp;
             {props.med ? <Chip label='Medical-Supplies'/> : ''}&nbsp;
             {props.couns ? <Chip label='Counseling-Services' />: ''}&nbsp;
             </h2>
            {props.house ? <h3>Room For:&nbsp;<Chip label={props.roomSize} />&nbsp; Length:&nbsp;<Chip label={props.length} /> </h3> : ''}
            {props.house ? <h3>Pets ok?&nbsp;
                {props.dog ? <Chip label='Dogs' icon={<PetsIcon />} /> : <Chip label='No Dogs' icon={<NotInterestedIcon />}/>}  &nbsp;
                {props.cat ? <Chip label='Cats' icon={<PetsIcon />} /> : <Chip label='No Cats' icon={<NotInterestedIcon />}/>}  &nbsp;
            </h3> : ''}
            <img style={{width:'400px', height:'400px'}}src={props.img} />
            <p>{props.text}</p>
            <p>Contact: <a href={props.contact}>{props.contact}</a></p>
            <hr />
        </div>
    )
//  }else if (props.bol2 === true&& props.rend2 === true){
//     return(
        
//         <div>
//             <h1>{props.title}</h1>
//             <img style={{width:'400px', height:'400px'}}src={props.img} />
//         </div>
//     )
//  }else if (props.bol3 === true && props.rend3 === true){
//      return(
//         <div>
//             <h1>{props.title}</h1>
//             <img style={{width:'400px', height:'400px'}}src={props.img} />
//         </div>
//      )
//  }
//   else{
//   return(
//   <div>GoodBye World</div>
//   )
//  }
}


export default Dummy 