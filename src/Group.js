import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {group: {}, error: "", congregants: [], members: [], res: ""};
        this.addToGroup = this.addToGroup.bind(this);
    }
    async componentDidMount() {

        const response = await axios.get("http://localhost:8080/api/v1/groups/" + this.props.match.params.id)
                .then((response) => {

                    this.setState({group: response.data});
                    this.setState({congregants: response.data.congregants});
                }).catch((err) => {
            console.log(err.response.data);

            this.setState({error: err.response.data});
        });
        await axios.get("http://localhost:8080/api/v1/members")
                .then((response) => {
                    console.log(response);
                    this.setState({members: response.data});
                }).catch((err) => {
            console.log(err.response.data);

            this.setState({error: err.response.data});
        });

    }
     addToGroup(phone) {
         console.log("Hello")
        /* axios.post("http://localhost:8080/api/v1/groups/" + this.props.match.params.id + "/" + phone)
                .then((response) => {
                    componentDidMount();
                    console.log("Hello There");
                }).catch((err) => {
            console.log(err.response.data);

            this.setState({error: err.response.data});
        });*/
    }
    render() {

        return(
                <div class="content">
                    <div class="Roboto margin-top-xssm top-nav"><span class="text-bold font-xl text-salmon">M</span>AJESTICHORSE 1.0</div>
                    <div class="Roboto margin-top-sm">{this.state.group.groupName} <div class="border-bottom-crimson bg-crimson margin-top-xssm"></div></div>
                    <div class="float-right"><Link to={'/groups/add/' + this.state.group.id}><div class="btn-variant-7 border-rad-md fixed-float"><span class="material-symbols-outlined margin-sm">
                                person_add
                            </span></div></Link><div class="fixed-float-3 "><div class="float-right w-25">
                                {this.state.members.map(member => <span id="" class="bg-crimson center margin-md font-xsm text-white pointer float-left border-rad-md padding-sm" onClick={() => this.addToGroup(member.phone)}>{member.firstName}-{ member.lastName} <span class="material-symbols-outlined font-md text-bold">
        add
    </span></span>)}
                            </div></div></div>
                    <div class="float-right"><Link to="/groups/add_member"><div class="btn-variant-7 border-rad-md fixed-float-2"><span class="material-symbols-outlined margin-sm">
                                delete
                            </span></div></Link></div>
                    {this.state.congregants.length === 0 ? <div class="flex-vertical margin-top-md center">Group has no members</div> : <div class="three-per-row w-80">
                        {this.state.congregants.map(member =>
                                        <div class="search">
                                            <div class="  margin-sm ">
                                                <div class="paddidng-sm-fixed">
                                                    <p class="font-md text-bold text-white Roboto">{member.firstName} {member.lastName}</p>
                                                    <div class="clusters">
                                
                                
                                                    </div>
                                                    <div class="flex-vertical">
                                                        <div>
                                                            <div class="font-xsm float-left "><span class="center"><span class="material-symbols-outlined text-gray">
                                                                        deskphone
                                                                    </span>{member.phone}</span></div>
                                                        </div>
                                                        <div>
                                                            <div class="font-xsm  float-left"><span class="center"><span class="material-symbols-outlined text-gray">
                                                                        location_city
                                                                    </span>{member.homeAddress}</span></div></div>
                                                    </div>
                                                </div>  
                                
                                            </div>
                                            <div class="float-right margin-sm-fixed"><span class="material-symbols-outlined font-sm">
                                                    delete
                                                </span></div>
                                        </div>)}
                    </div>}
                </div>
                );
    }
}
export default Group;



