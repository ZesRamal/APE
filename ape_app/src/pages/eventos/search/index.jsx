import { getUser, getUsers } from '../../api/user';
import NavBar from '../../navbar/navbar';
import React from 'react'

const searchEvents = () => {
    return (
        <div className="box-border *:before:*:after">
            <NavBar />
            <div className='searchBarContainer'>

            </div>
            <div className='eventPerCategoryContainer'>

            </div>
        </div>
    )
}
export default searchEvents;