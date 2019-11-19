import React, {useState} from 'react';

function neededForm (props){

    return(
        <div>
            <form>
                <label for="name">Name</label>
                <input type="text" name="name" id="name-input"/>
                
                <label for="email">email</label>
                <email type="email" name="email" id="email-input"></email>
                {/* name, email, linkToCFofV, familySize,numOfPet,petInfo,currentCity,willingToRelocate,housing*/}
            </form>

        </div>
    )

}

export default neededForm;