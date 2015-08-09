var assert = require('assert');
var PastRecord = require('../src/gacha/PastRecord.js');

describe('PastRecord', function() {
    describe('history', function() {
        it('空文字列が返ること', function() {
            var record = new PastRecord();
            assert.equal(record.history(), '');
        });
    });

});
