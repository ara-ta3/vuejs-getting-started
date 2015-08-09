module.exports = function(master) {
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
