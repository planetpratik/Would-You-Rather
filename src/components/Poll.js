import React, { Component } from 'react'
import { Card, Image, Checkbox, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/questions';
import { withRouter } from 'react-router-dom'

class Poll extends Component {
    state = {
        selectedCheckbox: ''
    }

    handleChange = (e, {value}) => {
        this.setState({selectedCheckbox:value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch,authedUser,id} = this.props
        const {selectedCheckbox} = this.state
        console.log('selected checkbox: ',selectedCheckbox)
        if(selectedCheckbox !== null) {
            dispatch(handleAddAnswer({
                authedUser:authedUser,
                questionId: id,
                answer:selectedCheckbox
            }))
        }
    }

    render() {
        const {question,authorAvatar,isError,userName,answer} = this.props
        if(isError) {
            return (
                <div>Question Doesn't Exist</div>
            )
        }
        let hasQuestionAlreadyAnswered = true
        if(answer===null){
            hasQuestionAlreadyAnswered = false
        }
        return(
           <div className='poll-container'>
            <div className='poll-unanswered-card-container'>
                <Card fluid raised style={{height:'230px'}}>
                    <div style={{display:'flex',background:'#f1f1f1',height:40,alignItems:'center'}}>
                    <Card.Header textAlign='left' className='ui header' style={{ fontSize:17,marginLeft:'15px'}}>{userName} Asks:</Card.Header>
                    </div>
                    <Card.Content className='poll-unanswered-card-content'>
                        <div style={{display:'flex',height:'160px',width:'35%',justifyContent:'center',alignItems:'center'}}>
                            <Image src = {authorAvatar} size ='small' circular verticalAlign='middle' spaced='right'/>
                        </div>
                        <div style={{width:'65%',marginLeft:'15px'}}>
                            <div>
                                <Card.Header className='ui header' style={{fontSize:22}}>Would You Rather ...</Card.Header>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',paddingTop:'20px'}}>
                                <Checkbox radio name='checkboxOne' label={question.optionOne.text} value='optionOne' checked={this.state.selectedCheckbox === 'optionOne'} onChange={this.handleChange}/>
                                <Checkbox radio name='checkboxTwo' style={{paddingTop:'15px'}} label={question.optionTwo.text} value='optionTwo' checked={this.state.selectedCheckbox === 'optionTwo'} onChange={this.handleChange}/>
                            </div>
                            <Button fluid color='teal' style={{ justifyContent:'center',marginTop:'20px', marginBottom:'10px'}} onClick={this.handleSubmit}>Submit</Button>
                        </div>
                    </Card.Content>
                </Card>
            </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users},{match}) {
    if(questions[match.params.question_id] === undefined) {
        const isError = true;
        return {
            isError
        }
    }
    const userName = users[questions[match.params.question_id].author].name
    console.log('match: ',match)
    const id = match.params.question_id
    console.log('id: ',id)
    const question = questions[id]
    console.log('question: ',question)

    let answer=''
    if(question.optionOne.votes.includes(authedUser)) {
        answer = 'optionOne'
    } else if (question.optionTwo.votes.includes(authedUser)) {
        answer = 'optionTwo'
    } else {
        answer = null
    }
    console.log('answer: ',answer)
    const authorAvatar = users[question.author].avatarURL
    const isError = false
    return {
        id,
        question,
        answer,
        authedUser,
        userName,
        authorAvatar,
        isError
    }
}

export default withRouter(connect(mapStateToProps)(Poll))