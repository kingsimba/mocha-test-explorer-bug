import { expect } from 'chai';
import { sum } from './test';

describe('sum()', () => {
    it('should work', () => {
        // BUG: 
        // "When run this test, "should work NOT" also runs unexpectedly.
        expect(sum(1, 2)).equals(3);
    });

    it('should work NOT', () => {
        expect(sum(1, 2)).equals(4);
    });
});
