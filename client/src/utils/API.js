import axios from "axios";

export default {
    getNeeded: function(){
        return axios.get("/api/needed");
    },
    getNeeded: function(id){
        return axios.get("api/needed/" + id);
    },
    deleteNeeded: function(id){
        return axios.delete("/api/needed/" + id);
    },
    saveNeeded: function(neededData){
        return axios.post("/api/needed/"+ neededData);
    },
    getOffered: function(){
        return axios.get("/api/offered");
    },
    getOffered: function(id){
        return axios.get("api/offered/" + id);
    },
    deleteOffered: function(id){
        return axios.delete("/api/offered/" + id);
    },
    saveOffered: function(neededData){
        return axios.post("/api/offered/"+ neededData);
    },
    getCounsMed: function(){
        return axios.get("/api/counsmed");
    },
    getCounsMed: function(id){
        return axios.get("api/counsmed/" + id);
    },
    deleteCounsMed: function(id){
        return axios.delete("/api/counsmed/" + id);
    },
    saveCounsMed: function(neededData){
        return axios.post("/api/counsmed/" + neededData);
    }
};