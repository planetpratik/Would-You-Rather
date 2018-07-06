import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
    <div>
        <Menu pointing secondary>
            <Menu.Item as={Link} name='home' to='/' color='teal' active>
                Home
            </Menu.Item>
            <Menu.Item as={Link} name='newQuestion' to='/add'>
                New Question
            </Menu.Item>
            <Menu.Item as={Link} name='leaderBoard' to='/leaderboard'>
                Leader Board
            </Menu.Item>
        </Menu>
    </div>
    )
}