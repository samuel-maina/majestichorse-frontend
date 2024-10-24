import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class CreateGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: "", groupName: "", description: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
                this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }
       handleGroupNameChange(event) {
        this.setState({groupName: event.target.value});
    }
    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handleSubmit(event) {
        var group = {groupName: this.state.groupName, description: this.state.description}
        const response = axios.post("http://localhost:8080/api/v1/groups", group)
                .then((response) => {
                    

                }).catch((err) => {
            console.log(err.response.data);
            this.setState({error: err.response.data});
        });
        event.preventDefault();
    }
    render() {

        return(
                <div class="content">
                    <div class="Roboto top-nav"><span class="text-bold font-xl text-salmon">M</span>AJESTICHORSE 1.0</div>
                    <div class="Roboto margin-top-sm">Create new Group <div class="border-bottom-crimson bg-crimson margin-top-xssm"></div></div>
                    <div class=" margin-top-xsm">
                
                        <div class=" ">
                
                
                            <form onSubmit={this.handleSubmit} className="flex-horizontal">
                                <div class="flex-vertical w-50">
                                    <span class="font-bold text-gray"> Name*</span>
                                    <input type="text"  value={this.state.groupName} class="input-variant margin-sm-fixed" required onChange={this.handleGroupNameChange} placeholder="Group name" />
                                    <span class="font-bold text-gray">Description</span>                            
                                    <input type="text"  value={this.state.description} class=" input-variant form-insput  margin-sm-fixed" required onChange={this.handleDescriptionChange} placeholder="Description" />
                           
                                </div>  
                                <div class="w-50 center flex-vertical float-left">
                                    <div class=" Roboto">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</div>
                                    <input type="submit" value="Next" className="btn-variant-2 text-white font-sm margin-sm" />
                                </div>  
                
                            </form>
                        </div>
                
                    </div> 
                </div>
                );
    }
}
export default CreateGroup;


