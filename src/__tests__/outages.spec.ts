import {endpoints} from "../endpoints";
import {mockOutages} from "../mocks/outages";

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

        const callOutages = endpoints.getOutages();

        expect(mockedGet).toHaveBeenCalled();
        expect(callOutages && typeof callOutages === 'object').toBe(true)
        await expect(callOutages).resolves.toEqual(expect.objectContaining(expectedRes));

    });
});