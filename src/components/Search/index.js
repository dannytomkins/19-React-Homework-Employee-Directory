import React from "react"

function Search(props) {
    return (
        <div className="input-group flex-nowrap">
            <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="addon-wrapping" value={props.searchName} onChange = {props.handleInputChange} />
        </div>
    )
}

export default Search