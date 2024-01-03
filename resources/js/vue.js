window.Vue = require('vue');
const app = new Vue({
    el:'#app',
    created() {
        Echo.channel("notification")
            .liste('MessageNotification', (e) => {
                console.log("this show without refresh");
            });
    }
});