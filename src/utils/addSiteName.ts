import {OutageSiteInterface, OutagesInterface, SiteInfoInterface} from "../constants/types";

export const addSiteName = (outages: OutagesInterface[], siteInfo: SiteInfoInterface) :OutageSiteInterface[] => {
    const {devices} = siteInfo;

    const deviceIdAndNameObject: {[key: string]: string} = {}

    devices.forEach(({id, name}) => {
        deviceIdAndNameObject[id] = name;
    })

    return outages.map((outage) => ({
        ...outage,
        name: deviceIdAndNameObject[outage.id]
    }))

}