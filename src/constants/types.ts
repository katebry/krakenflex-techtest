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

const earliestValidDate = '2022-01-01T00:00:00.000Z';

export {OutagesInterface, DeviceInterface, SiteInfoInterface, OutageSiteInterface, earliestValidDate};