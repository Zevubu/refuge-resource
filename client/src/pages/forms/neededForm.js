import React, {Component} from 'react';
import { Input, TextArea, FormBtn } from "../../components/Form"
import API from "../../utils/API"


class Form extends Component {
  state = {
    name:"",
    contactInfo:"",
    linkToFund:"",
    familySize:"",
    dogs:false,
    cats:false,
    petInfo:"",
    currentCity:"",
    willingToRelocate:false,
    housing:false,
    financeSupport:false,
    medicalSupplies:false,
    food:false,
    clothing:false,
    houseHoldItems:false,
    counsMed: false,
    photoLinks: "",
    about:"",
    moreInfo:"",  
  };



    // handleNameChange = (event) => {
    //   this.state.Needed.Name.push(event.target.value) 
      
    //   // setState({
    //   //   Name:event.target.value

    //   //   }
    //   // )
    // }
    
    // handlecontactInfo = (event) => {
    //   this.state.Needed.ContactInfo.push(event.target.value) 
      
    //   // setState({
    //   //   ContactInfo:event.target.value

    //   //   }
    //   // )
    // };
    
    // handlefamilySize = (event) => {
    //   this.state.Needed.FamilySize.push(event.target.value) 

    //   // setState({
    //   //   FamilySize:event.target.value

    //   //   }
    //   // )
    // }
    // handlenumofPet = (event) => {
    //   this.state.Needed.NumofPet.push(event.target.value) 
      
    //   // setState({
    //   //   NumofPet:event.target.value

    //   //   }
    //   // )
    // }
    // handlePetType = (event) => {
    //   this.state.Needed.PetInfo.push(event.target.value) 
      
    //   // setState({
    //   //   PetInfo:event.target.value

    //   //   }
    //   // )
    // }



    // handlecurrentCity = (event) => {
    //   this.state.Needed.CurrentCity.push(event.target.value) 
      
    //   // setState({
    //   //   PetInfo:event.target.value

    //   //   }
    //   // )
    // }
    // handlehousing = (event) => {
    //   this.state.Needed.Housing.push(event.target.value) 
      
    //   // setState({
    //   //   CurrentCity:event.target.value

    //   //   }
    //   // )
    // }
    // handlemedicalSupplies = (event) => {
    //   this.state.Needed.MedicalSupplies.push(event.target.value) 
      
      
    //   // setState({
    //   //   Housing:event.target.value

    //   //   }
    //   // )
    // }
    // handlefinanceSupport = (event) => {
    //   this.state.Needed.FinanceSupport.push(event.target.value) 
      
      
    //   // state.setState({
    //   //   MedicalSupplies:event.target.value

    //   //   }
    //   // )
    // }
    // handlefoodtype = (event) => {
    //   this.state.Needed.FinanceSupport.push(event.target.value) 
      
    //   // state.setState({
    //   //   FinanceSupport:event.target.value

    //   //   }
    //   // )
    // }
    // handleclothing = (event) => {
    //   this.state.Needed.Clothing.push(event.target.value) 
      
    //   // state.setState({
    //   //   Foodtype:event.target.value

    //   //   }
    //   // )
    // }
    // handlehouseHoldItems = (event) => {
    //   this.state.Needed.HouseHoldItems.push(event.target.value) 
      
    //   // state.setState({
    //   //   Clothing:event.target.value

    //   //   }
    //   // )
    // }
    
    // handlecousMed = (event) => {
    //   this.state.Needed.CounsMed.push(event.target.value) 
      
    //   // this.state.setState({
    //   //   CounsMed:event.target.value

    //   //   }
    //   // )
    // }
    // handlephotoLinks = (event) => {
    //   this.state.Needed.PhotoLinks.push(event.target.value) 
      
    //   // this.state.setState({
    //   //   PhotoLinks:event.target.value

    //   //   }
    //   // )
    // }
    // handleAbout= (event) => {
    //   this.state.Needed.About.push(event.target.value) 
      
    //   // this.state.setState({
    //   //   About:event.target.value

    //   //   }
    //   // )
    // }
    // handlemoreInfo = (event) => {
    //   this.state.Needed.MoreInfo.push(event.target.value) 
      
    //   // this.setState({
    //   //   MoreInfo:event.target.value

    //   //   }
    //   // )
    // };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    handleRadioChange = event => {
      const { name, checked } = event.target;
      // if(checked){
      //   checked === false
      //   console.log(`checked: ${checked}`)
      //   this.setState({
      //     [name]: checked
      //   });
      // }
      // else{
        console.log(`checked: ${checked}`)
        this.setState({
          [name]: checked
        });

      // }
      
    }

    handleFormSubmit = event =>{
      event.preventDefault();
      console.log(`event: ${event}`);
      console.log(`saved needed: ${JSON.stringify(this.state)}`)
      if(this.state.name && this.state.contactInfo){
        API.saveNeeded({
          name:this.state.name,
          contact:this.state.contactInfo,
          linkToCFofV:this.state.linkToFund,
          familySize:this.state.familySize,
          dog:this.state.dogs,
          cat:this.state.cats,
          petInfo:this.state.petInfo,
          location:this.state.currentCity,
          willingToRelocate:this.state.willingToRelocate,
          housing:this.state.housing,
          financialSupport:this.state.financeSupport,
          med:this.state.medicalSupplies,
          food:this.state.food,
          clothing:this.state.clothing,
          items:this.state.houseHoldItems,
          couns:this.state.counsMed,
          img:this.state.photoLinks,
          text:this.state.about,
          more:this.state.moreInfo
        })
      }
    };
    
    render() {
      return(     
        <div>
          <h1>Hello World!</h1>
        <form>
          <div>
            <label>Name: </label>
            <Input
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
              />
          </div>
            
          <div>
            <label>contactInfo :</label>
            <Input
              type="text"
              name="contactInfo"
              
              value={this.state.contactInfo}
              onChange={this.handleInputChange}
            />
          </div>
            
            
          <div>
            <label>family size: </label>
            <Input
              type="number"
              name="familySize"
              value={this.state.familySize}
              onChange={this.handleInputChange}
            />
          </div>          
            
          <div>
            <label>Current City:</label>
            <Input
              type="text"
              name="currentCity"
              value={this.state.currentCity}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Willing To Relocate:</label>
            <Input
              // type="text"
              type="radio" 
              name="willingToRelocate"
              checked={this.state.willingToRelocate}
              value={this.state.willingToRelocate}
              onChange={this.handleRadioChange}
            />
          </div>

          <div>
            <label>Photo Link:</label>
            <Input
              type="text"
              name="photoLinks"
              value={this.state.photoLinks}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Link to crowd funding, Venmo, or other payment sites.:</label>
            <Input
              type="text"
              name="linkToFund"
              value={this.state.linkToFund}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>About:</label>
            <TextArea
              type="text"
              name="about"
              value={this.state.about}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>moreInfo:</label>
            <TextArea
              type="text"
              name="moreInfo"
              value={this.state.moreInfo}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <h3>Please mark all you may need.</h3>
            <div>
              <label>Housing:</label>
              <Input
                // type="text"
                type="radio" 
                checked={this.state.housing}
                name="housing"
                value={this.state.housing}
                onChange={this.handleRadioChange}
              />
            
            </div>
            <div>
              <label>Medical Supplies:</label>
              <Input
                // type="text"
                type="radio" 
                checked={this.state.medicalSupplies}
                name="medicalSupplies"
                value={this.state.medicalSupplies}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>Finance Support:</label>
              <Input
                // type="text"
                type="radio" 
                name="financeSupport"
                checked={this.state.financeSupport}
                value={this.state.financeSupport}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>Food Type:</label>
              <Input
                // type="text"
                type="radio" 
                name="food"
                checked={this.state.food}
                value={this.state.food}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>Clothing:</label>
              <Input
                // type="text"
                type="radio" 
                name="clothing"
                checked={this.state.clothing}
                value={this.state.clothing}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>house Hold Items:</label>
              <Input
                // type="text"
                type="radio" 
                name="houseHoldItems"
                checked={this.state.houseHoldItems}
                value={this.state.houseHoldItems}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>counsMed:</label>
              <Input
                // type="text"
                type="radio" 
                name="counsMed"
                checked={this.state.counsMed}
                value={this.state.counsMed}
                onChange={this.handleRadioChange}
              />
            </div>
          </div>
          <div>
            <h2>Do you have pets?</h2>
            <div>
              <label>Dogs:</label>
              <Input
                type="radio" 
                name="dogs"
                checked={this.state.dogs}
                value={this.state.dogs}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>Cats:</label>
              <Input
                type="radio" 
                name="cats"
                checked={this.state.cats}
                value={this.state.cats}
                onChange={this.handleRadioChange}
              />
            </div>

            <div>
            <label>Pet Type:</label>
            <Input
              type="text"
              name="petInfo"
              value={this.state.petInfo}
              onChange={this.handleInputChange}
            />
            </div>
          </div>
          

          <FormBtn
            disabled={!(this.state.name && this.state.contactInfo)}
            onClick={this.handleFormSubmit}
          >
            Submit
          </FormBtn>
            
        </form>
      </div>
    )  
  }
}


export default Form;