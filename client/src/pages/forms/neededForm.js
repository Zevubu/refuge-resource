import React, {Component} from 'react';
// import API from "../utils/API.js"
class Form extends React.Component {

    state = {
        Name:"",
        ContactInfo:"",
        FamilySize: "",
        NumofPet: "",
        PetInfo:"",
        CurrentCity:"",
        Housing:"",
        MedicalSupplies: "",
        FinanceSupport: "",
        Foodtype: "",
        Clothing:"",
        HouseHoldItems:"",
        CounsMed: "",
        PhotoLinks: "",
        about: "",
        MoreInfo: "",
        
    };
  
    handleNameChange = (event) => {
      this.setState({
        Name:event.target.value

        }
      )
    }
    
    handlecontactInfo = (event) => {
      this.setState({
        ContactInfo:event.target.value

        }
      )
    };
    
    handlefamilySize = (event) => {
      this.setState({
        FamilySize:event.target.value

        }
      )
    }
    handlenumofPet = (event) => {
      this.setState({
        NumofPet:event.target.value

        }
      )
    }
    handlecurrentCity = (event) => {
      this.setState({
        PetInfo:event.target.value

        }
      )
    }
    handlehousing = (event) => {
      this.setState({
        CurrentCity:event.target.value

        }
      )
    }
    handlemedicalSupplies = (event) => {
      this.setState({
        Housing:event.target.value

        }
      )
    }
    handlefinanceSupport = (event) => {
      this.setState({
        MedicalSupplies:event.target.value

        }
      )
    }
    handlefoodtype = (event) => {
      this.setState({
        FinanceSupport:event.target.value

        }
      )
    }
    handleclothing = (event) => {
      this.setState({
        Foodtype:event.target.value

        }
      )
    }
    handlehouseHoldItems = (event) => {
      this.setState({
        Clothing:event.target.value

        }
      )
    }
   
    handlecousMed = (event) => {
      this.setState({
        CounsMed:event.target.value

        }
      )
    }
    handlephotoLinks = (event) => {
      this.setState({
        PhotoLinks:event.target.value

        }
      )
    }
    handleAbout= (event) => {
      this.setState({
        About:event.target.value

        }
      )
    }
    handlemoreInfo = (event) => {
      this.setState({
        MoreInfo:event.target.value

        }
      )
    };
    
    
   
    
        render() {
    
        
        return(
                
                <div>
                  <h1>Hello World!</h1>
                <form onSubmit= {this.handleSubmit}>
                  <div>
                  <label>Name: </label>
                  <input
                    type="text"
                    
                    value={this.state.name}
                    Onchange={e => this.handleNameChange}
                    />
                   </div>
                   
                   
                    <div>
                   <label>contactInfo :</label>
                  <input
                    type="text"
                    
                    value={this.state.contactInfo}
                    Onchange={e => this.handlecontactInfo}
                    />
                  </div>
                   
                    
                    <div>
                   <label>family size: </label>
                  <input
                    type="text"
                    
                    value={this.state.familySize}
                    Onchange={e => this.handlefamilySize}
                    />
                    </div>
                    
                    <div>
                   <label> number of Pets:</label>
                  <input
                    type="text"
                    
                    value={this.state.numofPet}
                    Onchange={e => this.handlenumofPet}
                    />
                   </div>
                   
                   <div>
                   <label>Current City:</label>
                  <input
                    type="text"
                    
                    value={this.state.currentCity}
                    Onchange={e => this.handlecurrentCity}
                    />
                    </div>
                  <div>
                   <label>Housing:</label>
                  <input
                    type="text"
                    
                    value={this.state.housing}
                    Onchange={e => this.handlehousing}
                    />
                  
                  </div>
                  <div>
                   <label>Medical Supplies:</label>
                  <input
                    type="text"
                    
                    value={this.state.medicalSupplies}
                    Onchange={e => this.handlemedicalSupplies}
                    />
                  </div>
                  <div>
                   <label>Finance Support:</label>
                  <input
                    type="text"
                    
                    value={this.state.financeSupport}
                    Onchange={e => this.handlefinanceSupport}
                    />
                  </div>
                  <div>
                   <label>Food Type:</label>
                  <input
                    type="text"
                    
                    value={this.state.foodtype}
                    Onchange={e => this.handlefoodtype}
                    />
                  </div>
                  <div>
                   <label>Clothing:</label>
                  <input
                    type="text"
                    
                    value={this.state.clothing}
                    Onchange={e => this.handleclothing}
                    />
                  </div>
                  <div>
                   <label>house Hold Items:</label>
                  <input
                    type="text"
                    
                    value={this.state.houseHoldItems}
                    Onchange={e => this.handlehouseHoldItems}
                    />
                  </div>
                  <div>
                   <label>counsMed:</label>
                  <input
                    type="text"
                    
                    value={this.state.counsMed}
                    Onchange={e => this.handlecousMed}
                    />
                  </div>
                  <div>
                   <label>photoLinks:</label>
                  <input
                    type="text"
                    
                    value={this.state.photoLinks}
                    Onchange={e => this.handlephotoLinks}
                    />
                  </div>
                  <div>
                   <label>About:</label>
                  <input
                    type="text"
                    
                    value={this.state.About}
                    Onchange={e => this.handleAbout}
                    />
                  </div>
                  <div>
                   <label>moreInfo:</label>
                  <input
                    type="text"
                    
                    value={this.state.moreInfo}
                    Onchange={e => this.handlemoreInfo}
                    />
                  </div>
                
                  <button type="submit">Submit</button>
                   
                   </form>
                   </div>
                   

                      
                    
                
                     
                   
            
    
        
        )
    
    }
    



}


export default Form;