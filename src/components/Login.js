import React, { Component } from 'react'
import { Card, Image, Divider, Dropdown, Button } from 'semantic-ui-react'
//import { Redirect } from 'react-router-dom'
//import { users } from '../utils/_DATA'
var logo = require('../assets/icons/React-Redux.jpeg')
class Login extends Component {

    tempUsers = [
         {
            text: 'Bob',
            value: 'bob',
            image: { avatar: true, src: require('../assets/images/bob.jpeg') },
        },
        {
            text: 'Alice',
            value: 'alice',
            image: { avatar: true, src: require('../assets/images/alice.jpeg') },
        },
        {
            text: 'Carol',
            value: 'carol',
            image: { avatar: true, src: require('../assets/images/carol.jpeg') },
        }
    ]

    handleLogin = (e) => {
        e.preventDefault()
        //Todo Redirect
    }

    render() {
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
                <Dropdown placeholder='Select User'  selection options={this.tempUsers} />
                <Button color='teal' style={{marginTop:'20px', marginBottom:'20px'}} onClick={this.handleLogin}>Sign In</Button>
            </Card>
            </div>
        )
    }
}
export default Login