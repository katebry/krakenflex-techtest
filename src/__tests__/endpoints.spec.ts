import {endpoints} from "../endpoints";
import {mockOutages, mockSiteInfoOutages} from "../mocks/";

describe('GET - Outages endpoint', () => {

    beforeEach(() => {
        jest.restoreAllMocks()
    })

    test('tests that when the outages endpoint is called, a list of outages are returned', async () => {

        const expectedRes = [{
                "id": "002b28fc-283c-47ec-9af2-ea287336dc1b",
                "begin": "2021-07-26T17:09:31.036Z",
                "end": "2021-08-29T00:37:42.253Z"
            }]

        const mockedGet = jest
            .spyOn(endpoints, "getOutages")
            .mockImplementation(() => Promise.resolve(mockOutages));

        const getOutagesResponse = endpoints.getOutages();

        expect(mockedGet).toHaveBeenCalled();
        expect(getOutagesResponse && typeof getOutagesResponse === 'object').toBe(true)
        await expect(getOutagesResponse).resolves.toEqual(expect.objectContaining(expectedRes));
    });
});

describe('GET - Site Outages endpoint', () => {

    beforeEach(() => {
        jest.restoreAllMocks()
    })

    test('tests that when the outages endpoint is called with a specific site, a list of site outages are returned', async () => {

        const expectedRes = {
            "id": "kingfisher",
            "name": "KingFisher",
            "devices": [
                {
                    "id": "002b28fc-283c-47ec-9af2-ea287336dc1b",
                    "name": "Battery 1"
                },
                {
                    "id": "086b0d53-b311-4441-aaf3-935646f03d4d",
                    "name": "Battery 2"
                }
            ]
        }

        const mockedGet = jest
            .spyOn(endpoints, "getSiteOutages")
            .mockImplementation(() => Promise.resolve(mockSiteInfoOutages));

        const getSiteOutagesResponse = endpoints.getSiteOutages();

        expect(mockedGet).toHaveBeenCalled();
        expect(getSiteOutagesResponse && typeof getSiteOutagesResponse === 'object').toBe(true)
        await expect(getSiteOutagesResponse).resolves.toEqual(expectedRes);
    });
});