import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import UserComponent from './components/UserComponent'

ReactDOM.render(
    <div>
        <div className="title">
            <h1 >Test</h1>
        </div>
    <UserComponent name="Nolan" age={26} address="blah blah blah" dob={new Date()} />
    </div>,
    document.getElementById('app-root'),
)