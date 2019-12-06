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
    dog:false, //x  
    cat:false,// x
    med:false,//x
    food:false,//x
    clothing:false,//x
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
      if(this.state.img === ""){
        this.state.img = "http://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png"
      }
      if(this.state.name && this.state.contact && this.state.location && this.state.text){
        API.saveOffered({
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
        name:"", //*
        contact:"",//*
        location:"",//*
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
        text:"",//*
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
            <label>*Name:</label>
            <Input
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
              />
          </div>
            
          <div>
            <label>*Email:</label>
            <Input
              type="text"
              name="contact"
              
              value={this.state.contact}
              onChange={this.handleInputChange}
            />
          </div>         
            
          <div>
            <label>*Current City:</label>
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
              name="img"
              value={this.state.img}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>*About:</label>
            <TextArea
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleInputChange}
            />
          </div>

          
          <div>
            <h3>Please mark everything your offereing.</h3>
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
              <label>House Hold Items:</label>
              <Input
                // type="text"
                type="checkbox" 
                name="items"
                checked={this.state.items}
                value={this.state.items}
                onChange={this.handleRadioChange}
              />
            </div>
            
            <div>
              <label>Counseling:</label>
              <Input
                // type="text"
                type="checkbox" 
                name="couns"
                checked={this.state.couns}
                value={this.state.couns}
                onChange={this.handleRadioChange}
              />
            </div>
          </div>
          <div>
            <label>Other Items:</label>
            <label>please specify in more info</label>
            <Input
              // type="text"
              type="checkbox" 
              name="houseHoldItems"
              checked={this.state.Items}
              value={this.state.Items}
              onChange={this.handleRadioChange}
            />
          </div>
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
            <h3>If your offering housing please fill out the fallowing.</h3>
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
              <Input
                type="text"
                name="stayLength"
                value={this.state.stayLength}
                onChange={this.handleInputChange}
              />
            </div>
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
          </div>
          <div>
            <label>More Info:</label>
            <TextArea
              type="text"
              name="more"
              value={this.state.more}
              onChange={this.handleInputChange}
            />
          </div>

          <FormBtn
            disabled={!(this.state.name && this.state.contact && this.state.location && this.state.text)}
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

