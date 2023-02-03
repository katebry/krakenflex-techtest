import {ApiConfigInterface, OutagesInterface, OutageSiteInterface, SiteInfoInterface} from "../constants/types";
import axios from "axios";

export const outagesService = {

    async getOutages(config: ApiConfigInterface): Promise<OutagesInterface[]> {

         const headers = {
                'accept': 'application/json',
                'x-api-key': config.apiKey,
        }

        const response = await axios(`${config.url}outages`, {headers: headers})
        return response.data;
    },

    async getSiteOutages(config: ApiConfigInterface): Promise<SiteInfoInterface> {

        const headers = {
            'accept': 'application/json',
            'x-api-key': config.apiKey,
        }

        const response = await axios(`${config.url}site-info/${config.siteId}`, {headers: headers})
        return response.data;
    },

    async postSiteOutages(outages:OutageSiteInterface[], config: ApiConfigInterface): Promise<number> {

        const headers = {
            'accept': '*/*',
            'x-api-key': config.apiKey,
            'Content-Type': 'application/json'
        }

        const outagesToJson = JSON.stringify(outages)

        const response = await axios.post(`${config.url}site-outages/${config.siteId}`, outagesToJson, {headers: headers})
        return response.status;
    }

}

