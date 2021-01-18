const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: '',
        }
    },
    methods: {
        showAlert() {
            alert('Button clicked!');
        },
        setInput1(event) {
            this.output1 = event.target.value;
        },
        setInput2 (event) {
            this.output2 = event.target.value;
        }
    }
});

app.mount('#assignment');