import axios from "../plugins/axios";
function getTotalLoan(){
   return axios.get("/financials");
}

function getUserList(){

    return axios.get("/users");
}

function getUserByName(name){
  return axios.get(`/users/search?name=${name}`);
}


export default {
  getTotalLoan,
  getUserList,
  getUserByName
};