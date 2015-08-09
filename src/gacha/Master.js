module.exports = function(rateOneItems) {
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
