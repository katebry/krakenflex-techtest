import {OutagesInterface, SiteInfoInterface} from "./constants/types";
import axios from "axios";

export const endpoints = {

    async getOutages(): Promise<OutagesInterface[]> {
        const url = process.env.URL;
        const apiKey = process.env.API_KEY;

         const headers = {
                'accept': 'application/json',
                'x-api-key': apiKey,
        }

        const response = await axios(`${url}outages`, {headers: headers})
        return response.data;
    },

    async getSiteOutages(): Promise<SiteInfoInterface> {
        const url = process.env.URL;
        const apiKey = process.env.API_KEY;
        const siteId = process.env.SITE_ID;

        const headers = {
            'accept': 'application/json',
            'x-api-key': apiKey,
        }

        const response = await axios(`${url}site-info/${siteId}`, {headers: headers})
        return response.data;
    }

}

