import axios from "axios";

export default {
    // Function to rerurn all users in API
    getAllUsers: function () {
        return axios.get("https://randomuser.me/api/?results=100");
    }
};