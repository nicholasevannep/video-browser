import Vue from 'vue';
import App from './App'

new Vue({
    render: function(createElement){
        return createElement(App);
    }
    //same as above
    //render: createElement=>createElement(App)
    //}).$mount('#app'); same as el:'#app'
}).$mount('#app');