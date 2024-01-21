import axios from "axios";
import { bodyParts, rapidapikey } from "../constants";
const Url= 'https://exercisedb.p.rapidapi.com'
// const ApiCall=async(url,params)=>
// {
//     try {
//         const options = {
//             method: 'GET',
//             url,
//             params,
//             headers: {
//               'X-RapidAPI-Key': rapidapikey,
//               'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//             }
            
//           };
//           const response = await axios.request(options);
//             return response;
//     } catch (error) {
//         console.log("Error in API call: ", error);
        
//     }
// }
// export const FetchExercisesByBodypart=async(bodyPart)=>{
//     let data=await ApiCall(Url+`/exercises/bodyPart/${bodyPart}`)
//     return data
// }






export const FetchExercisesByBodypart=async(bodyParts)=>{
  const options ={
  method: 'GET',
  url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyParts}`,
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': 'c1d47a51d8msh1af00e813a9acddp1965e9jsn9060fb9ff5e7',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  return response.data
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}