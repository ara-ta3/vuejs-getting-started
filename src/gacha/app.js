"use strict"

var Vue = require('vue');

var Gacha = require("./Gacha.js");

var PastRecord  = require("./PastRecord.js");

var Master = require("./Master.js");

var rateOneData  = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var master      = new Master(rateOneData);
master.appendData(["A","B","C"], 5);

var app = new Vue({
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
