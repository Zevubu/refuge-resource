import React, { Component } from 'react';
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import axios from 'axios'

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
// import { response } from 'express';

// import ImageUploader from 'react-images-upload';
// import "./cloudinary";
// const myRef = useRef({selectedFile: null});

class neededForm extends Component {
  state = {
    name: "",
    contactInfo: "",
    linkToFund: "",
    familySize: "",
    dogs: false,
    cats: false,
    petInfo: "",
    currentCity: "",
    willingToRelocate: false,
    housing: false,
    financeSupport: false,
    medicalSupplies: false,
    food: false,
    clothing: false,
    houseHoldItems: false,
    counsMed: false,
    photoLinks: "",
    about: "",
    moreInfo: "",
    picture: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

   uploadHandler = (event) => {
    event.preventDefault()
    let upload = this.state.picture
    const formData = new FormData()
    formData.append(
    'myFile',
     upload,
     upload.name
)
   axios.post('http://localhost:3001/upload', formData)
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
  fileChangedHandler = event => {
    this.setState({ picture: event.target.files[0] })
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    // this.uploadHandler()
    console.log(`event: ${event}`);
    console.log(`saved needed: ${JSON.stringify(this.state)}`)
    if (this.state.name && this.state.contactInfo) {
      API.saveNeeded({
        name: this.state.name,
        contact: this.state.contactInfo,
        linkToCFofV: this.state.linkToFund,
        familySize: this.state.familySize,
        dog: this.state.dogs,
        cat: this.state.cats,
        petInfo: this.state.petInfo,
        location: this.state.currentCity,
        willingToRelocate: this.state.willingToRelocate,
        housing: this.state.housing,
        financialSupport: this.state.financeSupport,
        med: this.state.medicalSupplies,
        food: this.state.food,
        clothing: this.state.clothing,
        items: this.state.houseHoldItems,
        couns: this.state.counsMed,
        img: this.state.photoLinks,
        text: this.state.about,
        more: this.state.moreInfo
      }).then(response => alert(`Thank you ${this.state.name} you post has been entered sucessfully`))
        .then(res => this.setState({
          name: "",
          contactInfo: "",
          linkToFund: "",
          familySize: "",
          dogs: false,
          cats: false,
          petInfo: "",
          currentCity: "",
          willingToRelocate: false,
          housing: false,
          financeSupport: false,
          medicalSupplies: false,
          food: false,
          clothing: false,
          houseHoldItems: false,
          counsMed: false,
          photoLinks: "",
          about: "",
          moreInfo: "",
        }))
        .catch(err => console.log(err))
    }
  };

  onDrop = (picture) => {
    this.setState({
      picture: picture,
    });

  }

  render() {
    return (
      <div>
        <form>
          <div>
            <TextField
              label="Name:"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <TextField
              label="Email:"
              type="text"
              name="contactInfo"
              value={this.state.contactInfo}
              onChange={this.handleInputChange}
            />
          </div>


          <div>
            <label className="greyLabel">Family size:</label>
            <Input
              type="number"
              name="familySize"
              value={this.state.familySize}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <TextField
              label="City:"
              type="text"
              name="currentCity"
              value={this.state.currentCity}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label className="greyLabel">Willing To Relocate:</label>
            <Checkbox 
              label="Willing To Relocate:"
              name="willingToRelocate"
              checked={this.state.willingToRelocate}
              value={this.state.willingToRelocate}
              onChange={this.handleRadioChange}
              color="primary"
            />
          </div>

          <div>Provide Image 
          <input type="file" onChange={this.fileChangedHandler}/>
          <button onClick={this.uploadHandler}>Upload!</button>
            {/* <TextField
              label="Link to Photo:"
              type="text"
              name="photoLinks"
              value={this.state.photoLinks}
              onChange={this.handleInputChange}
            /> */}
          </div>
          {/* <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            /> */}

          <div>
            <p className='greyLabel'>Link to crowd funding, Venmo, or other payment sites:</p>
            <TextField
              type="text"
              name="linkToFund"
              value={this.state.linkToFund}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <TextField
              label="About"
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
              name="about"
              value={this.state.about}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <TextField
              label="More Info"
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
              type="text"
              name="moreInfo"
              value={this.state.moreInfo}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="checkboxCluster">
            <h3>Please mark all you may need.</h3>
            <FormGroup>
              <div>
                <label>Housing:</label>
                <Checkbox
                  type="checkbox"
                  checked={this.state.housing}
                  name="housing"
                  value={this.state.housing}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
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
                  name="financeSupport"
                  checked={this.state.financeSupport}
                  value={this.state.financeSupport}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
              <div>
                <label>Food:</label>
                <Checkbox
                  type="checkbox"
                  name="food"
                  checked={this.state.food}
                  value={this.state.food}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
              <div>
                <label>Clothing:</label>
                <Checkbox
                  type="checkbox"
                  name="clothing"
                  checked={this.state.clothing}
                  value={this.state.clothing}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
              <div>
                <label>House Hold Items:</label>
                <Checkbox
                  type="checkbox"
                  name="houseHoldItems"
                  checked={this.state.houseHoldItems}
                  value={this.state.houseHoldItems}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
              <div>
                <label>Counseling or Medical Assistence:</label>
                <Checkbox
                  type="checkbox"
                  name="counsMed"
                  checked={this.state.counsMed}
                  value={this.state.counsMed}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
            </FormGroup>
            <div>
              <h2>Do you have pets?</h2>
              <div>
                <label>Dogs:</label>
                <Checkbox
                  type="checkbox"
                  name="dogs"
                  checked={this.state.dogs}
                  value={this.state.dogs}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>
              <div>
                <label>Cats:</label>
                <Checkbox
                  type="checkbox"
                  name="cats"
                  checked={this.state.cats}
                  value={this.state.cats}
                  onChange={this.handleRadioChange}
                  color="primary"
                />
              </div>

              <div>
                <label>Pet Type:</label>
                <TextField
                  type="text"
                  name="petInfo"
                  value={this.state.petInfo}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div style={{ margin: "1%" }}>
            <Button
              disabled={!(this.state.name && this.state.contactInfo)}
              onClick={this.handleFormSubmit}
              variant="contained"
              color="primary"
            >
              Submit
          </Button>
          </div>
        </form>
      </div>
    )
  }
}


export default neededForm;