import React, {Component} from 'react'
import { Menu, Image,Dropdown,Icon } from 'semantic-ui-react'
import { NavLink,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {logOut} from '../actions/authedUser'
var logo = require('../assets/icons/React-Redux.jpeg')

class Navbar extends Component {

    handleLogout = (e, { name }) =>{
        const {history} = this.props
        e.preventDefault()
        if(name==='logOut'){
            this.props.dispatch(logOut())
            history.push('/login')
        }
    }

    handleDropdownLogoutClick = (e, {name}) => {
        const {history} = this.props
        e.preventDefault()
        this.props.dispatch(logOut())
        history.push('/login')
    }

    render() {
        const {authedUser,users} = this.props
        const user = users[authedUser]
        const trigger = (
            <Icon size='big' name='bars' style={{height:'40px',width:'40px',justifyContent:'center',alignItems:'center', marginTop:'10px',marginLeft:'5px'}}/>
        )
        return(
        <div>
            {/*Only Displayed on Screen size above 768px*/}
            <div className='nav-desktop'>
                <Menu stackable pointing secondary>
                    <Menu.Item as={NavLink} name='home' exact to='/' color='teal' >
                        Home
                    </Menu.Item>
                    <Menu.Item as={NavLink} name='newQuestion' exact to='/add' color='teal'>
                        New Question
                    </Menu.Item>
                    <Menu.Item as={NavLink} name='leaderBoard' exact to='/leaderboard' color='teal'>
                        Leader Board
                    </Menu.Item>
                    {authedUser ?
                    <Menu.Menu position='right'>
                        <Menu.Item name='username' >
                            Hello, {user.name}
                        </Menu.Item>
                        <Image style={{marginTop:'0.35em'}} avatar src={user!== 'undefined' ? user.avatarURL : logo}/>
                        <Menu.Item as={NavLink} name='logOut' exact to='/login' color='teal' onClick={this.handleLogout}>
                            Log Out
                        </Menu.Item>
                   </Menu.Menu>: <div></div>}
                </Menu>
            </div>

            {/*Only Displayed on the Screen size below 768px*/}
            <div className='nav-mobile' >
            <Menu>
                <Dropdown trigger={trigger} pointing='top left' style={{height:'45px',width:'45px',justifyContent:'center',alignItems:'center'}} icon={null}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} exact to='/' name='home' text='Home'/>
                            <Dropdown.Item as={NavLink} exact to='/add' name='newQuestion' text='New Question'/>
                            <Dropdown.Item as={NavLink} exact to='/leaderboard' name='leaderBoard' text='Leader Board'/>
                            <Dropdown.Item name='logOut' text='Log Out' onClick={this.handleDropdownLogoutClick}/>
                        </Dropdown.Menu>
                </Dropdown>
                {authedUser ?
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            Hello, {user.name}
                        </Menu.Item>
                        <Image style={{marginTop:'0.35em'}} avatar src={user!== 'undefined' ? user.avatarURL : logo}/>
                    </Menu.Menu>: <div></div>}
                </Menu>
            </div>
        </div>
        )
    }
}

function mapStateToProps ({authedUser,users}) {
    return {
        authedUser,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Navbar))