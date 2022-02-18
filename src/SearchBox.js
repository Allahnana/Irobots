import React from 'react'

export default function SearchBox({searchRobot}) {
    return (
        <div className= 'pa2'>
            <input
            className= 'pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='Search Robot'
            name='search'
            onChange={searchRobot}
            />
        </div>
    )
}
