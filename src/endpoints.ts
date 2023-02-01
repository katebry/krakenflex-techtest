import {OutagesInterface} from "./constants/types";
import axios from "axios";

export const endpoints = {

    async getOutages(): Promise<OutagesInterface[]> {
        const url = process.env.URL;
        const apiKey = process.env.API_KEY;

         const headers = {
                'accept': 'application/json',
                'x-api-key': apiKey,
        }

        const response = await axios(`${url}`, {headers: headers})
        return response.data;
    }

}

