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

interface OutageSite {
    id: string;
    name: string;
    begin: string;
    end: string;
}

export {OutagesInterface, SiteInfoInterface, OutageSite};