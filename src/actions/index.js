import { GET_CAT_GIFS } from '../actionTypes';
import axios from 'axios';

const apiUrl = '//api.giphy.com/v1';
const apiKey = '3ZvKznLHZ509dWMsni4Bsg9PVWO1CdoM';
const searchQuery = `api_key=${apiKey}&q=cats&limit=5`;


export const getCatGifs = content => {
    return {
        type: GET_CAT_GIFS,
        content
    };
}

// async actions
// NOTE: actions that returns a function, and it returns a promise

export const fetchCatGifs = () => {
    const gifCatsUrl = `${apiUrl}/gifs/search?${searchQuery}`;
    return (dispatch) => {
        return axios.get(gifCatsUrl)
            .then(response => {
                const { data: content } = response.data; 
                dispatch(getCatGifs(content));
            })
            .then()
            .catch(error => {
                throw (error);
            });
    };
};
