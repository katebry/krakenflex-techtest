import {outagesService} from "./service/outagesService";
import {filterOutages, addSiteName} from "./utils"
import {ApiConfigInterface} from "./constants";

export const handler = async ():Promise<void> => {
    try {
        const config: ApiConfigInterface = {
        url: process.env.URL || '',
        apiKey: process.env.API_KEY || '',
        siteId: process.env.SITE_ID || ''
        }

        const outagesResponse = await outagesService.getOutages(config);
        const siteOutagesResponse = await outagesService.getSiteOutages(config);
        const filteredResults = filterOutages(outagesResponse, siteOutagesResponse)
        const formattedSiteInfo = addSiteName(filteredResults,siteOutagesResponse)
        const postedData = await outagesService.postSiteOutages(formattedSiteInfo, config)
        console.log(postedData)
    } catch (error) {
        console.log(error)
    }
}

handler();