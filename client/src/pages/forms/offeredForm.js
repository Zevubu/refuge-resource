import React, {Component} from 'react';
import { Input, TextArea, FormBtn } from "../../components/Form"
import API from "../../utils/API"


class offeredForm extends Component {
  state = {
    name:"",
    contact:"",
    location:"",
    house:false, //x
    roomSize:0,//x
    stayLength:"",//x
    dog:false,
    cat:false,
    med:false,
    food:false,
    clothing:false,
    items:false,
    couns:false,
    other:false,
    img:"",
    text:"",
    more:""  
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
      if(this.state.name && this.state.contactInfo){
        API.saveNeeded({
            name:this.state.name,
            contact:this.state.contact,
            location:this.state.location,
            house:this.state.house,
            roomSize:this.state.roomSize,
            stayLength:this.state.stayLength,
            dog:this.state.dog,
            cat:this.state.cat,
            med:this.state.med,
            food:this.state.food,
            clothing:this.state.clothing,
            items:this.state.items,
            couns:this.state.couns,
            other:this.state.other,
            img:this.state.img,
            text:this.state.text,
            more:this.state.more  
        })
        .then(res => this.setState({
        name:"",
        contact:"",
        location:"",
        house:false,
        roomSize:0,
        stayLength:"",
        dog:false,
        cat:false,
        med:false,
        food:false,
        clothing:false,
        items:false,
        couns:false,
        other:false,
        img:"",
        text:"",
        more:""  
        }))
        .catch(err => console.log(err))
    }
    };
    
    render() {
      return(     
        <div>
        <form>
          <div>
            <label>Name:</label>
            <Input
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
              />
          </div>
            
          <div>
            <label>Email:</label>
            <Input
              type="text"
              name="contact"
              
              value={this.state.contact}
              onChange={this.handleInputChange}
            />
          </div>         
            
          <div>
            <label>Current City:</label>
            <Input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleInputChange}
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
            <h3>Please mark everything your offereing.</h3>
            <div>
              <label>Housing:</label>
              <Input
                // type="text"
                type="checkbox" 
                checked={this.state.house}
                name="house"
                value={this.state.house}
                onChange={this.handleRadioChange}
              />
            
            </div>

            <div>
                <label>How many poeple do you have room for:</label>
                <Input
                type="number"
                name="roomSize"
                value={this.state.roomSize}
                onChange={this.handleInputChange}
                />
            </div>

            <div>
            <label>Length of stay:</label>
            <TextArea
              type="text"
              name="stayLength"
              value={this.state.stayLength}
              onChange={this.handleInputChange}
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
              <label>Food Type:</label>
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
              <label>house Hold Items:</label>
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
              <label>counsMed:</label>
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
                name="dog"
                checked={this.state.dog}
                value={this.state.dog}
                onChange={this.handleRadioChange}
              />
            </div>
            <div>
              <label>Cats:</label>
              <Input
                type="checkbox" 
                name="cat"
                checked={this.state.cat}
                value={this.state.cat}
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


export default offeredForm;

