import { expect } from 'chai';
import { sum } from './test';

describe('sum()', () => {
    it('should work', () => {
        // BUG: 
        // This test failed as expected. There is an error icon on line 5, 
        // also as expected.
        // But these is NO error message along line 10
        expect(sum(1, 2)).equals(4);
    });
});
