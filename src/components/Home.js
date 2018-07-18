import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import Question from './Question'
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        const {unansweredQuestions, answeredQuestions} = this.props

        const panes = [
            {
                menuItem: 'Unanswered Questions',
                render: () =>
                    <Tab.Pane attached='bottom'>
                            { unansweredQuestions.map((id) => (
                                <li key={id} >
                                    <Question id={id}/>
                                </li>
                            ))}
                    </Tab.Pane>
            },
            {
                menuItem: 'Answered Questions',
                render: () =>
                    <Tab.Pane attached='bottom'>
                            { answeredQuestions.map((id) => (
                                <li key={id} >
                                    <Question id={id}/>
                                </li>
                            ))}
                    </Tab.Pane>
            }
          ]

        return(
            <div className='dashboard-questions-container'>
                <Tab menu={{ widths: 2, color:'teal', attached: true, tabular: false }} panes={panes}/>
            </div>
        )
    }
}

function mapStateToProps({authedUser,questions}) {
    const unansweredQuestions = Object.keys(questions)
        .filter((i) => (
            !questions[i].optionOne.votes.includes(authedUser) &&
            !questions[i].optionTwo.votes.includes(authedUser)
        ))
        .sort((a,b) => (
            questions[b].timestamp - questions[a].timestamp
        ))
        const answeredQuestions = Object.keys(questions)
        .filter((i) => (
            questions[i].optionOne.votes.includes(authedUser) ||
            questions[i].optionTwo.votes.includes(authedUser)
        ))
        .sort((a,b) => (
            questions[b].timestamp - questions[a].timestamp
        ))
    return {
        unansweredQuestions,
        answeredQuestions
    }
}
export default connect (mapStateToProps)(Home)