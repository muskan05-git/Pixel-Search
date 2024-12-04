import axios from "axios";

const searchImages = async(term) =>{
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization:'Client-ID KMeUhUfaU3rvGSSifXGYkzY_Qr-Yoku-ByR-L-M5NBE'
        },
        params:{
            query: term,
        }
    });
    
    return response.data.results;
}
export default searchImages;