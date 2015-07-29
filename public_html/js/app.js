Vue.config.debug = true;

var app = new Vue({

    el: '#app',

    data: {
        segments: [
            {
                n: 1,
                description:"",
                src: "../img/noimage.png"
            },
            {
                n: 2,
                description:"",
                src: "../img/noimage.png"
            },
            {
                n: 3,
                description:"",
                src: "../img/noimage.png"
            },
            {
                n: 4,
                description:"",
                src: "../img/noimage.png"
            },
        ]
    },

    created: function () {
    },

    methods: {
        submit: function() {
        }
    }
})
