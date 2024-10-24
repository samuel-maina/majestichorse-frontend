import Home from './Home';
import UserRegistration from './UserRegistration';
import Members from './Members';
import MemberAttendance from './MemberAttendance';
import Attendance from './Attendance';
import Groups from './Groups';
import CreateMember from './CreateMember';
import CreateGroup from './CreateGroup';
import Group from './Group';
import AddMemberToGroup from './AddMemberToGroup';
import {BrowserRouter as Router, Route, Routes, Switch, withRouter}
from 'react-router-dom';
import Nav from './Nav';
function App() {
    return (
            <div className="App">
                <Router>
                    <Nav/>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/attendance" component={MemberAttendance}/>
                    <Route exact path="/attendance/:id" component={Attendance}/>
                    <Route exact path="/user/apply" component={UserRegistration}/>
                    <Route exact path="/members/list" component={Members}/>
                    <Route exact path="/groups/list" component={Groups}/>
                    <Route exact path="/groups/:id" component={Group}/>
                    <Route exact path="/groups/add/:id" component={AddMemberToGroup}/>
                    <Route exact path="/members/create" component={CreateMember}/>
                    <Route exact path="/groups/create/new" component={CreateGroup}/>
                    </Switch>
                </Router>
            </div>
            );
}

export default App;
