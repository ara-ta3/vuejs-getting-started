var assert = require('power-assert');
var PastRecord = require('../src/gacha/PastRecord.js');

describe('PastRecord', function() {
    describe('history', function() {
        it('初期では空文字列が返ること', function() {
            var record = new PastRecord();
            var actual = record.history().toString();
            assert.equal(actual, '');
        });

        it('1つ追加された時, その文字列が返ること', function() {
            var record = new PastRecord();
            record.appendResult("hoge");
            var actual = record.history().toString();
            assert.equal(actual, 'hoge');
        });

        it('2つ追加された時, その文字列がカンマ区切りで返ること', function() {
            var record = new PastRecord();
            record.appendResult("hoge");
            record.appendResult("fuga");
            var actual = record.history().toString();
            assert.equal(actual, 'hoge,fuga');
        });
    });
});
