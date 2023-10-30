// where we keep all api calls
import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    //request

    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY, // will need "environment variables" for security
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
