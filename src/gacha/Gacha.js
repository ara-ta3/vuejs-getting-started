module.exports = function(master) {
    this.master = master;
    this.draw   = function () {
        var idx = getRamdomIndex(this.master.length);
        return this.master[idx];
    };

    var getRamdomIndex = function (max) {
        return Math.floor(Math.random() * max);
    };
};
