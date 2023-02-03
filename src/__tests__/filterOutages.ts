import {
    outOfDateMockOutages,
    inDateMockOutages,
    mockSiteInfoOutages,
    inDateMockOutagesWithoutMatchingId,
    mockOutages
} from "../mocks/";
import {filterOutages} from "../utils";

describe('Utility functions', () => {
    test('when data with out-of-date outages is passed in, an empty array is returned', () => {
        expect(filterOutages(outOfDateMockOutages, mockSiteInfoOutages)).toEqual([]);
    });

    test('when data without out-of-date outages is passed in, the original input is returned', () => {
        const expectedRes = [
            {
                "id": "002b28fc-283c-47ec-9af2-ea287336dc1b",
                "begin": "2023-07-12T16:31:47.254Z",
                "end": "2023-10-13T04:05:10.044Z"
            },
            {
                "id": "002b28fc-283c-47ec-9af2-ea287336dc1b",
                "begin": "2023-07-12T16:31:47.254Z",
                "end": "2023-10-13T04:05:10.044Z"
            },
            {
                "id": "086b0d53-b311-4441-aaf3-935646f03d4d",
                "begin": "2022-01-01T00:00:00.000Z",
                "end": "2023-01-01T00:00:00.000Z"
            }
        ]
        expect(filterOutages(inDateMockOutages, mockSiteInfoOutages)).toEqual(expectedRes)
    })

    test('when the outages passed in do not have an id that matches the list of devices in the site information result, these are filtered out', () => {
        const expectedRes: [] = []

        expect(filterOutages(inDateMockOutagesWithoutMatchingId, mockSiteInfoOutages)).toEqual(expectedRes)
    })

    test('when the outages passed in have an id that matches the list of devices in the site information result, these are returned', () => {
        const expectedRes = [
            {
                "id": "002b28fc-283c-47ec-9af2-ea287336dc1b",
                "begin": "2022-05-23T12:21:27.377Z",
                "end": "2022-11-13T02:16:38.905Z"
            },
            {
                "id": "002b28fc-283c-47ec-9af2-ea287336dc1b",
                "begin": "2022-12-04T09:59:33.628Z",
                "end": "2022-12-12T22:35:13.815Z"
            },
            {
                "id": "086b0d53-b311-4441-aaf3-935646f03d4d",
                "begin": "2022-07-12T16:31:47.254Z",
                "end": "2022-10-13T04:05:10.044Z"
            }]

        expect(filterOutages(mockOutages, mockSiteInfoOutages)).toEqual(expectedRes)
    })
});