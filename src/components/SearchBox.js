import React from 'react'



const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="pa2">
            <input type = 'search'
            className = "pa3 ba b--yellow bg-lightest-blue"
            placeholder = "search for a family member"
            onChange = {
                searchChange
            }
            />
            
        </div>
    )
}

export default SearchBox