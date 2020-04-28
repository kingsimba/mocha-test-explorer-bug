"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const test_1 = require("./test");
describe('sum()', () => {
    it('should work', () => {
        // BUG: 
        // This test failed as expected. There is an error icon on line 5, also as expected.
        // But these is NO error message along line 9
        chai_1.expect(test_1.sum(1, 2)).equals(4);
    });
});
//# sourceMappingURL=test.spec.js.map