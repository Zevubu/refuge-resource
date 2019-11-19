import React, {useState} from 'react';

function neededForm (props){

    return(
        <div>
            <form>
                {/* name */}
                <label for="name">Name</label>
                <input type="text" name="name" id="name-input"/>
                <br/>
                {/* email */}
                <label for="email">email</label>
                <input type="text" name="email" id="email-input"/>
                <br/>
                {/* linkToCFofV */}
                <label for="link-to-pay">link to crowd fund or venmo.</label>
                <input type="text" name="link-to-pay" id="link-to-pay-input"/>
                <br/>
                familySize
                <section id="family-size">
                    <p class="select-text"> Size of family</p>
                    <select id="num-choice">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                    </select>
                </section>
                {/* numOfPet */}
                <section id="pet-num">
                    <p class="select-text">Number of pets</p>
                    <select id="pet-num">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                    </select>
                </section>
                {/* <label for="pet-info">type of pet.</label>
                <input type="text" name="pet-info" id="pet-info-input"/> */}

                

                {/* <input type="checkbox" name="checkbox-thing"> */}


{/*                 
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