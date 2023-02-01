import {endpoints} from "./endpoints";

const handler = async () => {
    try {
        const outagesRes = await endpoints.getOutages();
        const siteOutageRes = await endpoints.getSiteOutages();
        console.log(outagesRes, siteOutageRes)
    } catch (error) {
        console.log(error)
    }
}

handler();