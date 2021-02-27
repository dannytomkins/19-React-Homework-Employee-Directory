import axios from "axios";

export default {
    // Function to rerurn all users in API
    getAllPeople: function () {
        return axios.get("https://randomuser.me/api/?results=100");
    }
};