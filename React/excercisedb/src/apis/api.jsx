import axios from "axios";

const getAllBodyParts = async () =>{
    const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'x-rapidapi-key': '964ab9bfbemshf7c3a95fc2524cep1f15dbjsnbed1d3d53735',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


const getAllExercises = async () =>{
const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    params: {
        sortMethod: 'bodyPart',
        offset: '0',
        limit: '10',
        sortOrder: 'ascending'
    },
    headers: {
        'x-rapidapi-key': '964ab9bfbemshf7c3a95fc2524cep1f15dbjsnbed1d3d53735',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getAllBodyParts,
    getAllExercises
}