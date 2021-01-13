const app = Vue.createApp({
    data() {
        return{
            name: 'Anna',
            age: 29,
            imgLink: 'https://picsum.photos/200/300'
        }
    },
    methods: {
        addFive(){
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');