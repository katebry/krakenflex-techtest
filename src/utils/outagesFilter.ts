import {OutagesInterface, earliestValidDate, SiteInfoInterface} from "../constants/types";

export const outagesFilter = (outages: OutagesInterface[], siteInfo: SiteInfoInterface) => {
    const siteDeviceIds = siteInfo.devices.map(({id}) => id);

    return outages.filter((outage: OutagesInterface) => {
        return outage.begin >= earliestValidDate && siteDeviceIds.includes(outage.id);
    })
}