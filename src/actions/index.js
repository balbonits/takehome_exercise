import { GET_CAT_GIFS } from '../actionTypes';
import axios from 'axios';

const apiUrl = '//api.giphy.com/v1';
const apiKey = '3ZvKznLHZ509dWMsni4Bsg9PVWO1CdoM';
const searchQuery = `api_key=${apiKey}&q=cats`;


export const getCatGifs = content => {
    return {
        type: GET_CAT_GIFS,
        content
    };
}

export const fetchCatGifs = (offset = 0) => {
    const gifCatsUrl = `${apiUrl}/gifs/search?${searchQuery}&offset=${offset}`;
    return (dispatch) => {
        return axios.get(gifCatsUrl)
            .then(response => {
                dispatch(getCatGifs(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};
