import React, {useState} from 'react';

function neededForm (props){

    return(
        <div>
            <form>
                {/* name */}
                <label for="name">Name</label>
                <input type="text" name="name" id="name-input"/>
                {/* email */}
                <label for="email">email</label>
                <email type="email" name="email" id="email-input"/>
                {/* linkToCFofV */}
                <label for="link-to-pay">link to crowd fund or venmo.</label>
                <email type="text" name="link-to-pay" id="link-to-pay-input"/>
                {/* familySize */}
                <label for="familySize">size of family</label>
                <email type="email" name="email" id="email-input"/>

                {/* 
                familySize,
                numOfPet,
                petInfo,
                currentCity,
                willingToRelocate,
                housing,
                medicalSupplies, 
                financeSupport,
                food,
                clothing,
                houseHoldItems,
                counsMed,
                photoLinks
                About
                moreInfo
                */}
            </form>

        </div>
    )

}

export default neededForm;