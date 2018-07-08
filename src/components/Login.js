import React, { Component } from 'react'
import { Card, Image, Divider, Dropdown, Button } from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
var logo = require('../assets/icons/React-Redux.jpeg')

class Login extends Component {
    state = {
        userId:  null
    }
    static defaultProps = {
        authUser: null,
        location: null,
      }

    handleDropdownSelection = (e, data) => {
        e.preventDefault()
        const id = data.value
        this.setState(() => ({
            userId: id
        }))
    }
    handleLogin = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        if(this.state.userId !== null) {
            dispatch(setAuthedUser(this.state.userId))
        }
        else {
            // Todo
        }
    }

    render() {
        const { authedUser,location } = this.props
        const { from } = location.state || { from: { pathname: '/' }}
        if(authedUser !== null) {
            return (
                <Redirect to={from} />
            )
        }
        return(
            <div className='login-container'>
            <Card fluid>
                <Card.Content style={{background:"#f1f1f1"}}>
                        <Card.Header textAlign='center'>Welcome to the Would You Rather App !</Card.Header>
                        <Card.Description textAlign='center'>Please sign in to continue</Card.Description>
                </Card.Content>
                <Divider fitted/>
                <Image src ={ logo } size='small' centered />
                <p style={{textAlign:'center',color:"#00b5ad", fontSize:'18px', fontWeight:'bold'}}>Sign In</p>
                <Dropdown placeholder='Select User'  selection options={this.props.userDetails} onChange={this.handleDropdownSelection} />
                <Button color='teal' style={{ justifyContent:'center',marginTop:'20px', marginBottom:'20px'}} onClick={this.handleLogin}>Sign In</Button>
            </Card>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    const userDetails = Object.keys(users)
        .map((user) => {
            const userStrippedDetails = {
                text: users[user].name,
                value: users[user].id,
                image: {
                    avatar: true,
                    src: users[user].avatarURL
                }
            }
            return(userStrippedDetails)
        })
    return {
        userDetails,
        authedUser
    }
}

export default connect(mapStateToProps)(Login)