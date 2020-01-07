import React, { Component } from 'react';
import { Input, TextArea, FormBtn } from "../../components/Form"
import API from "../../utils/API"
import { TextField, Checkbox, FormGroup } from '@material-ui/core';



class offeredForm extends Component {
  state = {
    name: "",
    contact: "",
    location: "",
    house: false, //x
    roomSize: 0,//x
    stayLength: "",//x
    dog: false, //x  
    cat: false,// x
    med: false,//x
    food: false,//x
    clothing: false,//x
    items: false,
    couns: false,
    other: false,
    img: "",
    text: "",
    more: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleRadioChange = event => {
    const { name, checked } = event.target;
    console.log(`checked: ${checked}`)
    this.setState({
      [name]: checked
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`event: ${event}`);
    console.log(`saved needed: ${JSON.stringify(this.state)}`)
    if (this.state.img === "") {
      this.state.img = "http://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png"
    }
    if (this.state.name && this.state.contact && this.state.location && this.state.text) {
      API.saveOffered({
        name: this.state.name,
        contact: this.state.contact,
        location: this.state.location,
        house: this.state.house,
        roomSize: this.state.roomSize,
        stayLength: this.state.stayLength,
        dog: this.state.dog,
        cat: this.state.cat,
        med: this.state.med,
        food: this.state.food,
        clothing: this.state.clothing,
        items: this.state.items,
        couns: this.state.couns,
        other: this.state.other,
        img: this.state.img,
        text: this.state.text,
        more: this.state.more
      })
        .then(res => this.setState({
          name: "", //*
          contact: "",//*
          location: "",//*
          house: false,
          roomSize: 0,
          stayLength: "",
          dog: false,
          cat: false,
          med: false,
          food: false,
          clothing: false,
          items: false,
          couns: false,
          other: false,
          img: "",
          text: "",//*
          more: ""
        }))
        .catch(err => console.log(err))
    }
  };

  render() {
    return (
      <div>
        <form>

          <div>
            <TextField
              label="Name *"
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <TextField
              label="Email *"
              type="text"
              name="contact"
              value={this.state.contact}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <TextField
              label="Current City"
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <TextField
              label="Photo Link"
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.handleInputChange}
            />
          </div>

          <br></br>

          <div>
            <TextField
              multiline
              rows="4"
              variant="outlined"
              label="About *"
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleInputChange}
            />
          </div>


          <div>
            <h3>Please mark everything you can offer.</h3>
            <FormGroup>
              <div>
                <label>Medical Supplies:</label>
                <Checkbox
                  type="checkbox"
                  checked={this.state.medicalSupplies}
                  name="medicalSupplies"
                  value={this.state.medicalSupplies}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
              <div>
                <label>Finance Support:</label>
                <Checkbox
                  type="checkbox"
                  checked={this.state.financeSupport}
                  name="financeSupport"
                  value={this.state.financeSupport}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
              <div>
                <label>Food Type:</label>
                <Checkbox
                  type="checkbox"
                  checked={this.state.foodType}
                  name="foodType"
                  value={this.state.foodType}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
              <div>
                <label>Clothing:</label>
                <Checkbox
                  type="checkbox"
                  checked={this.state.clothing}
                  name="clothing"
                  value={this.state.clothing}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
              <div>
                <label>House Hold Items:</label>
                <Checkbox
                  type="checkbox"
                  checked={this.state.items}
                  name="items"
                  value={this.state.items}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>

              <div>
                <label>Counseling:</label>
                <Checkbox
                  type="checkbox"
                  checked={this.state.couns}
                  name="couns"
                  value={this.state.couns}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
            </FormGroup>
          </div>

          <FormGroup>
            <div>
              <label>Other Items:</label>

              <Checkbox
                type="checkbox"
                checked={this.state.Items}
                name="houseHoldItems"
                value={this.state.Items}
                onChange={this.handleRadioChange}
                color="primary"
              />
              <br></br>
              <label>(Please specify in "More Info" below)</label>
            </div>
            <div>
              <label>Housing:</label>
              <Checkbox
                type="checkbox"
                checked={this.state.house}
                name="house"
                value={this.state.house}
                onChange={this.handleRadioChange}
                color="primary"
              />
            </div>
          </FormGroup>
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
            <TextField
              label="More Info"
              multiline
              rows="4"
              variant="outlined"
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

