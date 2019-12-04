import React from 'react';
// import { yieldExpression } from '@babel/types';


// import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PetsIcon from '@material-ui/icons/Pets';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import HouseIcon from '@material-ui/icons/House';
import KitchenIcon from '@material-ui/icons/Kitchen';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import BuildIcon from '@material-ui/icons/Build';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';



function DummyNeeded(props){
 if ((props.housing === true && props.house === true  )     || 
     (props.nutrients === true && props.food === true )     ||
     (props.supplies === true && props.items === true )     ||
     (props.medical === true && props.med === true )        ||
     (props.clothes === true && props.clothing === true )   ||
     (props.counseling === true && props.couns === true )   
    ){
    return(
        
        <div>
        
            <h1>{props.title}</h1>
            <h3>Located @:{props.location}</h3>

            <h2>Need:&nbsp;
                {props.house ? <Chip label='Housing' icon={<HouseIcon />}/> : ''}&nbsp;
                {props.food ? <Chip label='Food' icon={<KitchenIcon/>}/> : ''}&nbsp;
                {props.clothing ? <Chip label='Clothing' icon={<AccessibilityIcon />}/> : ''}&nbsp;
                {props.med ? <Chip label='Medical-Supplies' icon={<LocalPharmacyIcon/>}/> : ''}&nbsp;
                {props.items ? <Chip label='Household-Items' icon={<BuildIcon />}/> : ''}&nbsp;
                {props.couns ? <Chip label='Counseling-Services' icon={<RecordVoiceOverIcon />} />: ''}&nbsp;
            </h2>

            <h3>Family Size: {props.familySize} </h3>
            {props.house ? <h3>Pets ok?&nbsp;
                {props.dog ? <Chip label='Dogs' icon={<PetsIcon />} /> : <Chip label='No Dogs' icon={<NotInterestedIcon />}/>}  &nbsp;
                {props.cat ? <Chip label='Cats' icon={<PetsIcon />} /> : <Chip label='No Cats' icon={<NotInterestedIcon />}/>}  &nbsp;
            </h3> : ''}

            <img style={{width:'400px', height:'400px'}}src={props.img} alt={props.alt}/>
            <p>{props.text}</p>
            <p>Contact: <a href={`mailto:${props.contact}?subject=${props.title}'s%20post`}>{props.contact}</a></p>
            <hr />
        </div>
    )
            }
            else{
                return ''
            }
}

export default DummyNeeded 