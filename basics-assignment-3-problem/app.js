const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }    
    },
    computed: {
        commentResult() {
            // console.log(this.result);
            if (this.result < 37) {
                return 'Not there yet!';
            } 
            else if (this.result > 37) {
                return 'Too much!';
            }
            return this.result;
        }
    },
    watch: {
        commentResult() {
            const that = this;
            setTimeout(function() {
                that.result = 0;
            },5000);
        }
    },
    methods: {
        add(num) {
            this.result += num;
        }
    }
});

app.mount('#assignment');