const app = Vue.createApp({
    data() {
        return{
            name: 'Anna',
            age: 29,
        }
    },
    methods: {
        addFive(){
            return this.age + 5;
        }
    }
});

app.mount('#assignment');