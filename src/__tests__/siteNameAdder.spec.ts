import {siteNameAdder} from '../utils'
import {formattedSiteInfo, mockSiteInfoOutages, inDateMockOutagesWithMatchingId} from "../mocks";

describe('Utility functions', () => {
    test('when a list of outages is passed in, the site id is matched and the corresponding site name added', () => {
        expect(siteNameAdder(inDateMockOutagesWithMatchingId, mockSiteInfoOutages)).toEqual(formattedSiteInfo);
    });
});