const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }    
    },
    computed: {
        commentResult(){
            // console.log(this.result);
            if (this.result < 37) {
                return 'Not there yet!'
            } 
            else if (this.result > 37) {
                return 'Too much!'
            }
            return this.result
        }
    },
    methods: {
        add(num){
            this.result += num;
        }
    }
});

app.mount('#assignment');