(function(Vue) {
    "use strict"

    var Gacha = function(master) {
        this.master = master;
        this.draw   = function () {
            var idx = getRamdomIndex(this.master.length);
            return this.master[idx];
        };

        var getRamdomIndex = function (max) {
            return Math.floor(Math.random() * max);
        };
    };

    var PastRecord  = function(master) {
        this.master = master;
        this.past   = [];

        this.appendResult = function(item) {
            this.past.push(item);
        }

        this.history = function() {
            var self = this;
            return {
                toString: function() {
                    return self.past.join(",");
                }
            };
        };

        this.rest = function() {
            var self = this;
            return {
                toString: function() {
                    return self.master.filter(function(item) {
                        return self.past.indexOf(item) == -1;
                    });
                }
            };
        };
    };

    var Master = function(rateOneItems) {
        var master = rateOneItems;
        var gachaItems = rateOneItems;

        this.appendData = function(data, rate) {
            master = master.concat(data);
            gachaItems = gachaItems.map(function(i) {
                return arrayPad(i, rate);
            }).reduce(function(mapedArray, retArray) {
                return retArray.concat(mapedArray);
            }).concat(data);
        };

        this.getAllData = function() {
            return master;
        };

        this.getGachaItems = function() {
            return gachaItems;
        };

        var arrayPad = function(val, n) {
            var arrayPadIter = function(val, n, acc) {
                if( n <= 0 )
                    return acc;
                else {
                    acc.push(val);
                    return arrayPadIter(val, n - 1 ,acc);
                }
            };
            return arrayPadIter(val, n, []);
        };

    };

    var rateOneData  = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var master      = new Master(rateOneData);
    master.appendData(["A","B","C"], 5);

    var app         = new Vue({
        el: '#app',
        data: {
            gacha: new Gacha(master.getGachaItems()),
            record: new PastRecord(master.getAllData()),
            item: "Item",
            history: "History",
            rest: "Rest Items"
        },
        created: function() {
            this.rest = this.record.rest();
        },
        methods: {
            draw: function() {
                var item        = this.gacha.draw();
                this.item       = item;
                this.record.appendResult(item);
                this.rest       = this.record.rest();
                this.history    = this.record.history();
            }
        }
    });
})(Vue);
