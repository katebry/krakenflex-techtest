import {endpoints} from "./endpoints";
import {outagesFilter, siteNameAdder} from "./utils"

export const handler = async () => {
    try {
        const outagesResponse = await endpoints.getOutages();
        const siteOutagesResponse = await endpoints.getSiteOutages();
        const filteredResults = outagesFilter(outagesResponse, siteOutagesResponse)
        const formattedSiteInfo = siteNameAdder(filteredResults,siteOutagesResponse)
        const postedData = await endpoints.postSiteOutages(formattedSiteInfo)
        console.log(postedData)
    } catch (error) {
        console.log(error)
    }
}

handler();