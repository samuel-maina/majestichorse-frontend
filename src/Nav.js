import { Link, NavLink } from 'react-router-dom';
        const Nav = () => {


return (
        <div className="nav font-sm text-gray flex-vertical flex-center">

    <NavLink to="/" activeClassName="selected-2" className='nav-items font-xsm' >
        <div>
            <div className='' title="Data&Reports">
                <span class="material-symbols-outlined img-centered  ">
                    home
                </span>

            </div>
            Home
        </div>
    </NavLink>

    <NavLink to="/groups/list" activeClassName="selected-2" className='nav-items font-xsm' >
        <div>
            <div className='' >
                <span class="material-symbols-outlined img-centered  ">
                    Groups
                </span>

            </div>
            Groups
        </div>
    </NavLink>

    <NavLink to="/records" activeClassName="selected-2" className='nav-items font-xsm' >
        <div>
            <div className='' title="Data&Reports">
                <span class="material-symbols-outlined img-centered  ">
                    event
                </span>

            </div>
            Calendar
        </div>
    </NavLink>

    <NavLink to="/members/list" activeClassName="selected-2" className='nav-items font-xsm' >
        <div>
            <div className='' title="Data&Reports">
                <span class="material-symbols-outlined img-centered  ">
                    group
                </span>

            </div>
            Members
        </div>
    </NavLink>

    <NavLink to="/data&reports/" activeClassName="selected-2" className='nav-items font-xsm' >
        <div>
            <div className='' title="Data&Reports">
                <span class="material-symbols-outlined img-centered  ">
                    forum
                </span>

            </div>
            Messaging
        </div>
    </NavLink>
    
    <NavLink to="/users" activeClassName="selected-2" className='nav-items font-xsm' >
        <div>
            <div className='' title="Data&Reports">
                <span class="material-symbols-outlined img-centered  ">
                    person
                </span>

            </div>
            Users
        </div>
    </NavLink>

    <NavLink to="/attendance" activeClassName="selected-2" className='nav-items font-xsm' >
        <div>
            <div className='' title="Data&Reports">
                <span class="material-symbols-outlined img-centered  ">
                    airline_seat_recline_normal
                </span>

            </div>
            Attendance
        </div>
    </NavLink>

    <NavLink to="/logout" activeClassName="selected-2" className='nav-items font-xsm' >
        <div>
            <div className='text-salmon' title="Data&Reports">
                <span class="material-symbols-outlined img-centered  ">
                    logout
                </span>

            </div>
            Exit
        </div>
    </NavLink>



</div>
        );
}
export default Nav;