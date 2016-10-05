/**
 * Created by water on 16-10-4.
 */
var data = {
    a: 1,
    newTodo: '',
    message: 'water love 蒋茜',
    url: 'http://www.baidu.com',
    sex: '男',
    show:true,
    firstname: '郭',
    lastname: '宁波',
    greeting: true,
    checkname:[],
    selected:[],
    todos: [
        {text: 'Learn JavaScript'},
        {text: 'Learn PHP'},
        {text: 'Learn VUE.js'}
    ],
    subjects: [
        { name: '语文'},
        { name: '语文'},

    ],
    isA: true,
    isB: false,
    styleNav: {
        'padding-top': '15px',

    },
    styleFooter: {
        'height': '60px',
        'width': '100%',
        // 'position': 'absolute',
        'bottom': '20px'

    },

};
var index = new Vue({
    el: '#app',
    data: data,
    methods: {
        addTodo: function () {
            var text = this.newTodo.trim()
            if (text) {
                this.todos.push({text: text})
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1)
        },
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    },
    computed: {
        b: function () {
            return this.a + 1;
        },
        fullname: function () {
            return this.firstname + '' + this.lastname;
        }
    }
});