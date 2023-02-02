import {endpoints} from "./endpoints";
import {outagesFilter, siteNameAdder} from "./utils"

const handler = async () => {
    try {
        const outagesResponse = await endpoints.getOutages();
        const siteOutagesResponse = await endpoints.getSiteOutages();
        const filteredResults = outagesFilter(outagesResponse, siteOutagesResponse)
        const formattedSiteInfo = siteNameAdder(filteredResults,siteOutagesResponse)
        console.log(formattedSiteInfo)
    } catch (error) {
        console.log(error)
    }
}

handler();