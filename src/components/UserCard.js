import React, {Component} from 'react'
import { Card,Image,Label } from 'semantic-ui-react'

class UserCard extends Component {
    render() {
        const {user} = this.props
        return (
                <div className='leaderboard-card-container'>
                <Card fluid raised style={{height:'140px'}}>
                    <Label corner ='left' icon ='trophy'/>
                    <Card.Content className='leaderboard-card-content'>
                    <div style={{display:'flex',height:'110px',width:'20%',justifyContent:'center',alignItems:'center'}}>
                        <Image src={user.avatarURL} size ='tiny' circular verticalAlign='middle' spaced='left'/>
                    </div>
                    <div style={{width:'60%',height:'110px'}}>
                        <div className='verticle-divider-leaderboard-left'></div>
                        <Card.Content style={{display:'flex',flexDirection:'column',paddingLeft:25,paddingRight:30}}>
                            <Card.Header className='ui header' style={{fontSize:25}}>{user.name}</Card.Header>
                            <div style={{display:'flex',flexDirection:'row',paddingTop:'10px'}}>
                                <p style={{textAlign:'left',flex:'90%'}}>Answered questions</p>
                                <p style={{textAlign:'right',flex:'10%'}}>{user.questionsAnswered}</p>
                            </div>
                            <div style={{display:'flex',flexDirection:'row',paddingTop:'5px'}}>
                                <p style={{textAlign:'left',flex:'90%'}}>Created questions</p>
                                <p style={{textAlign:'right',flex:'10%'}}>{user.createdQuestions}</p>
                            </div>
                        </Card.Content>
                        <div className='verticle-divider-leaderboard-right'></div>
                    </div>
                    <div style={{width:'20%'}}>
                        <Card centered style={{height:'110px'}}>
                            <Card.Header className='ui header' textAlign='center' style={{height:30,marginTop:8}}>Score</Card.Header>
                            <Card.Content style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Label circular color='teal' size='huge'>{user.rank}</Label>
                            </Card.Content>
                        </Card>
                    </div>
                    </Card.Content>
                </Card>
                </div>
        )
    }
}

export default UserCard