import {endpoints} from "./endpoints";
import {outagesFilter} from "./utils/outagesFilter";

const handler = async () => {
    try {
        const outagesResponse = await endpoints.getOutages();
        const siteOutagesResponse = await endpoints.getSiteOutages();
        const filteredResults = outagesFilter(outagesResponse, siteOutagesResponse)
        console.log(outagesResponse, siteOutagesResponse, filteredResults)
    } catch (error) {
        console.log(error)
    }
}

handler();