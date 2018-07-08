import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Card, Input, Divider, Button } from 'semantic-ui-react'
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
    state = {
        optionOneText:'',
        optionTwoText:''
    }
     handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch, authedUser,history} = this.props
        const {optionOneText,optionTwoText} = this.state

        if(optionOneText&&optionTwoText) {
            dispatch(handleAddQuestion({optionOneText,optionTwoText,authedUser}))
        }
        history.push('/')
    }

    handleInputOneChange = (e, data) => {
        e.preventDefault()
        this.setState({
            optionOneText:data.value
        })
    }

    handleInputTwoChange = (e, data) => {
        e.preventDefault()
        this.setState({
            optionTwoText:data.value
        })
    }

    render() {
        return(
            <div className='add-new-question-form'>
                <Card fluid>
                    <Card.Header  textAlign='center' style={{ marginTop:7.5, marginBottom:0,height:40, fontSize:25}} className='ui header'>Create New Question</Card.Header>
                    <Card.Content>
                        <Card.Description >Complete the question:</Card.Description>
                        <Card.Header  style={{marginTop:'20px', marginBottom:'10px'}}>Would you rather ...</Card.Header>
                        <Input fluid placeholder='Enter Option One Text Here' style={{marginTop:'20px'}}  onChange={this.handleInputOneChange}></Input>
                        <Divider horizontal>OR</Divider>
                        <Input fluid placeholder='Enter Option Two Text Here' onChange={this.handleInputTwoChange}></Input>
                        <Button fluid color='teal' style={{ justifyContent:'center',marginTop:'20px', marginBottom:'10px'}} onClick={this.handleSubmit}>Submit</Button>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)