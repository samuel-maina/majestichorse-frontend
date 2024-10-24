import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {members: [], error: ""};
    }
    async componentDidMount() {

        const response = await axios.get("http://localhost:8080/api/v1/members")
                .then((response) => {
                    console.log(response);
                    this.setState({members: response.data});
                }).catch((err) => {
            console.log(err.response.data);

            this.setState({error: err.response.data});
        });

    }
    render() {

        return(
                <div class="content">
                    <div class="Roboto top-nav"><span class="text-bold font-xl text-salmon">M</span>AJESTICHORSE 1.0</div>
                    <div class="Roboto margin-top-sm">Members <div class="border-bottom-crimson bg-crimson margin-top-xssm"></div></div>
                    <div class="float-right"><Link to="/members/create"><div class="btn-variant-7 border-rad-md fixed-float"><span class="material-symbols-outlined margin-sm">
                                person_add
                            </span></div></Link></div>
                    <div class="three-per-row">
                        {this.state.members.map(member =>
                                        <Link to={'/courses/' + member.phone} class="search">
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
                                        <div class="float-right margin-sm-fixed"><span class="material-symbols-outlined">
                                                more_vert
                                            </span></div>
                                        </Link>)}
                    </div>
                </div>
                );
    }
}
export default Members;