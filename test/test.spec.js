"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const test_1 = require("./test");
describe('sum()', () => {
    it('should work', () => {
        // BUG: 
        // "When run this test, "should work NOT" also runs unexpectedly.
        chai_1.expect(test_1.sum(1, 2)).equals(3);
    });
    it('should work NOT', () => {
        chai_1.expect(test_1.sum(1, 2)).equals(4);
    });
});
//# sourceMappingURL=test.spec.js.map