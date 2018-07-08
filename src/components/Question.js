import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardContent, Image, Button } from 'semantic-ui-react'

class Question extends Component {
    render() {
        const {question,user} = this.props
        const questionHeader = user.name
        const questionDescription = question.optionOne.text.substring(0,15)
        return (
            <div className='dashboard-list-container'>
                <Card fluid raised {...{className: 'question-list-card'}}>
                    <Card.Content style={{background:"#f1f1f1",height:40 }}>
                        <Card.Header>{questionHeader} says:</Card.Header>
                    </Card.Content>
                    <CardContent style={{height:110}}>
                        <Image src={user.avatarURL} size ='tiny' circular verticalAlign='middle' spaced='left'/>
                        <div className='verticle-divider'></div>
                        <div className='dashboard-list-question-info description'>
                        <Card.Header className='ui header'>Would you rather</Card.Header>
                        <Card.Description style={{marginBottom:8}}>.... {questionDescription} ....</Card.Description>
                        <Button fluid basic color='teal' style={{height:30,fontSize:12}}>View Poll</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({questions, users}, {id}) {
    const question = questions[id]
    const user = users[question.author]
    return {
        question,
        user
    }
}

export default connect(mapStateToProps)(Question)