var app1 = new Vue({
    el: '#app1',
    data: {
        message: '',
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: ''
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        checked: true,
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        checkedNames: ["Джон"],
    },
});

var app5 = new Vue ({
    el: '#app5',
    data: {
        picked: "Два",
    },
});

var app6 = new Vue ({
    el: '#app6',
    data: {
        selected: "",
    },
});

var app7 = new Vue ({
    el: '#app7',
    data: {
        selected: "",
    },
});

var app8 = new Vue ({
    el: '#app8',
    data: {
        selected: 'A',
        options: [
            { text: 'Один', value: 'А' },
            { text: 'Два', value: 'Б' },
            { text: 'Три', value: 'В' },
        ]
    }
});