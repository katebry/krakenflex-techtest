interface OutagesInterface {
    id: string;
    begin: string;
    end: string;
}

interface DeviceInterface {
    id: string;
    name: string;
}

interface SiteInfoInterface {
    id: string;
    name: string;
    devices: DeviceInterface[];
}

interface OutageSiteInterface {
    id: string;
    name: string;
    begin: string;
    end: string;
}

interface ApiConfigInterface {
    url: string,
    apiKey: string,
    siteId?: string,
}

export {OutagesInterface, DeviceInterface, SiteInfoInterface, OutageSiteInterface, ApiConfigInterface};