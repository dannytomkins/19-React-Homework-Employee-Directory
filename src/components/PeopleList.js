//DataArea

import React, { Component } from "react";
import API from "./API";

function PeopleList {
    //sort by one category
    //filter by one property

    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

}

export default PeopleList
