import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return(
    <div>
        <Menu pointing secondary>
            <Menu.Item as={NavLink} name='home' exact to='/' color='teal'>
                Home
            </Menu.Item>
            <Menu.Item as={NavLink} name='newQuestion' exact to='/add' color='teal'>
                New Question
            </Menu.Item>
            <Menu.Item as={NavLink} name='leaderBoard' exact to='/leaderboard' color='teal'>
                Leader Board
            </Menu.Item>
        </Menu>
    </div>
    )
}
