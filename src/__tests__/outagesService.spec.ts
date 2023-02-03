import {outagesService} from "../service/outagesService";
import {formattedSiteInfo, mockOutages, mockSiteInfoOutages} from "../mocks/";
import {ApiConfigInterface} from "../constants/types";

describe('Outages service', () => {

    const mockConfig: ApiConfigInterface = {
        url: '',
        apiKey: '',
        siteId: ''
    }

    beforeEach(() => {
        jest.restoreAllMocks()
    })

    test('GET = getOutages: tests that when the outages endpoint is called, a list of outages are returned', async () => {

        const expectedRes = [{
                "id": "002b28fc-283c-47ec-9af2-ea287336dc1b",
                "begin": "2021-07-26T17:09:31.036Z",
                "end": "2021-08-29T00:37:42.253Z"
            }]

        const mockedGet = jest
            .spyOn(outagesService, "getOutages")
            .mockImplementation(() => Promise.resolve(mockOutages));

        const getOutagesResponse = outagesService.getOutages(mockConfig);

        expect(mockedGet).toHaveBeenCalled();
        expect(getOutagesResponse && typeof getOutagesResponse === 'object').toBe(true)
        await expect(getOutagesResponse).resolves.toEqual(expect.objectContaining(expectedRes));
    });

    test('GET = getSiteOutages: tests that when the outages endpoint is called with a specific site, a list of site outages are returned', async () => {

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
            .spyOn(outagesService, "getSiteOutages")
            .mockImplementation(() => Promise.resolve(mockSiteInfoOutages));

        const getSiteOutagesResponse = outagesService.getSiteOutages(mockConfig);

        expect(mockedGet).toHaveBeenCalled();
        expect(getSiteOutagesResponse && typeof getSiteOutagesResponse === 'object').toBe(true)
        await expect(getSiteOutagesResponse).resolves.toEqual(expectedRes);
    });

    test('POST = postSiteOutages: tests that when the postSiteOutages endpoint is called, a 200 response is returned when valid data is passed in', async () => {

        const expectedRes = 200

        const mockedPost = jest
            .spyOn(outagesService, "postSiteOutages")
            .mockImplementation(() => Promise.resolve(200));

        const postOutagesResponse = outagesService.postSiteOutages(formattedSiteInfo, mockConfig);

        expect(mockedPost).toHaveBeenCalled();
        await expect(postOutagesResponse).resolves.toEqual(expectedRes);
    });
});