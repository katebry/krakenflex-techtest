import {OutagesInterface, earliestValidDate, SiteInfoInterface} from "../constants/types";

export const filterOutages = (outages: OutagesInterface[], siteInfo: SiteInfoInterface) => {
    const siteDeviceIds = siteInfo.devices.map(({id}) => id);
    const parsedEarliestValidDate = Date.parse(earliestValidDate);

    return outages.filter((outage: OutagesInterface) => {
     const parsedOutageBeginDate = Date.parse(outage.begin)
        return parsedOutageBeginDate >= parsedEarliestValidDate && siteDeviceIds.includes(outage.id);
    })
}