import axios from "axios";
import { bodyParts, rapidapikey } from "../constants";
const Url= 'https://exercisedb.p.rapidapi.com'
const ApiCall=async(url,params)=>
{
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
              'X-RapidAPI-Key': rapidapikey,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
            
          };
          const response = await axios.request(options);
            return response;
    } catch (error) {
        console.log("Error in API call: ", error);
        
    }
}
export const FetchExercisesByBodypart=async(bodyPart)=>{
    let data=await ApiCall(Url+`/exercises/bodyPart/${bodyPart}`)
    return data
}