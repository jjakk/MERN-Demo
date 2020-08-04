import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class navbar extends Component{

    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-ld'>
                <Link to='/' className='navbar-brand'>ExerTracker</Link>
                <div classname='collapse navbar-collapse'></div>
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'>
                        <Link to='/' className='nav-link'>Exercises</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='/create' className='nav-link'>Create Exercise Log</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='/user' className='nav-link'>Create User</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
