import React, {Component} from 'react';
import { Input, TextArea, FormBtn } from "../../components/Form"
import API from "../../utils/API"


class neededForm extends Component {
  state = {
    name:"", //*
    contactInfo:"",//*
    linkToFund:"",
    familySize:"",
    dogs:false,
    cats:false,
    petInfo:"",
    currentCity:"",//*
    willingToRelocate:false,
    housing:false,
    financeSupport:false,
    medicalSupplies:false,
    food:false,
    clothing:false,
    houseHoldItems:false,
    counsMed: false,
    photoLinks: "",
    about:"",//*
    moreInfo:"",  
  };

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
      if(this.state.name && this.state.contactInfo && this.state.currentCity && this.state.about){
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
          .then(res => this.setState({
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
          }))
          .catch(err => console.log(err))
      }
    };
    
    render() {
      return(     
      <div>
        <form>
          <div>
            <label>*Name:</label>
            <Input
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
              />
          </div>
            
          <div>
            <label>*Email address:</label>
            <Input
              type="text"
              name="contactInfo"
              
              value={this.state.contactInfo}
              onChange={this.handleInputChange}
            />
          </div>
            
            
          <div>
            <label>Family size:</label>
            <Input
              type="number"
              name="familySize"
              value={this.state.familySize}
              onChange={this.handleInputChange}
            />
          </div>          
            
          <div>
            <label>*Current city:</label>
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
              type="checkbox" 
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
            <label>*About:</label>
            <TextArea
              type="text"
              name="about"
              value={this.state.about}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Link to crowd funding, Venmo, or other payment sites:</label>
            <Input
              type="text"
              name="linkToFund"
              value={this.state.linkToFund}
              onChange={this.handleInputChange}
            />
          </div>
         
          <div>
            <h3>Please mark all you may need.</h3>
            <div>
              <label>Housing:</label>
              <Input
                // type="text"
                type="checkbox" 
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
                type="checkbox" 
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
                type="checkbox" 
                name="financeSupport"
                checked={this.state.financeSupport}
                value={this.state.financeSupport}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>Food:</label>
              <Input
                // type="text"
                type="checkbox" 
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
                type="checkbox" 
                name="clothing"
                checked={this.state.clothing}
                value={this.state.clothing}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>House Hold Items:</label>
              <Input
                // type="text"
                type="checkbox" 
                name="houseHoldItems"
                checked={this.state.houseHoldItems}
                value={this.state.houseHoldItems}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>Counseling or Medical Assistence:</label>
              <Input
                // type="text"
                type="checkbox" 
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
                type="checkbox" 
                name="dogs"
                checked={this.state.dogs}
                value={this.state.dogs}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>Cats:</label>
              <Input
                type="checkbox" 
                name="cats"
                checked={this.state.cats}
                value={this.state.cats}
                onChange={this.handleRadioChange}
              />
            </div>

            <div>
            <label>Pet Info:</label>
            <Input
              type="text"
              name="petInfo"
              value={this.state.petInfo}
              onChange={this.handleInputChange}
            />
            </div>
          </div>
           <div>
            <label>More Info:</label>
            <TextArea
              type="text"
              name="moreInfo"
              value={this.state.moreInfo}
              onChange={this.handleInputChange}
            />
          </div>

          <FormBtn
            disabled={!(this.state.name && this.state.contactInfo && this.state.currentCity && this.state.about)}
            onClick={this.handleFormSubmit}
          >
            Submit
          </FormBtn>
            
        </form>
      </div>
    )  
  }
}


export default neededForm;