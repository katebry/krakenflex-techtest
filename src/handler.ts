import {endpoints} from "./endpoints";

const handler = async () => {
    try {
        const outagesRes = await endpoints.getOutages();
        console.log(outagesRes)
    } catch (error) {
        console.log(error)
    }
}

handler();