import axios from 'axios'

const fetchJobs = async( query, country) => {
    try{

        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
                query: query,
                page: '3',
                num_pages: '3',
                country: country,
                date_posted: 'all'
            },
            headers: {
                'x-rapidapi-key': '964ab9bfbemshf7c3a95fc2524cep1f15dbjsnbed1d3d53735',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com',
                'Content-Type': 'application/json'
            }
        };
        const response = await axios.request(options);
        // const data = await response.json();
        return response.data;
    }
    catch(err){
        console.log(err)
    }
}

export default fetchJobs;