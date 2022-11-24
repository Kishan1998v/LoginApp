import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

if(localStorage.users=== undefined){
    let users = [
        {
            firstname:"",
            lastname :"",
            email    :"",
            phone    :"9899788771",
            password :"wisdomcircle1"

        },
        {
            firstname:"",
            lastname :"",
            email    :"",
            phone    :"9899788772",
            password :"wisdomcircle2"

        },
        {
            firstname:"",
            lastname :"",
            email    :"",
            phone    :"9899788773",
            password :"wisdomcircle3"

        },
        {
            firstname:"",
            lastname :"",
            email    :"",
            phone    :"9899788774",
            password :"wisdomcircle4"

        },
        {
            firstname:"",
            lastname :"",
            email    :"",
            phone    :"9899788775",
            password :"wisdomcircle5"

        },
        {
            firstname:"",
            lastname :"",
            email    :"johndoe6@wisgen.com",
            phone    :"",
            password :"wisdomcircle6"

        },
        {
            firstname:"",
            lastname :"",
            email    :"johndoe7@wisgen.com",
            phone    :"",
            password :"wisdomcircle7"

        },
        {
            firstname:"",
            lastname :"",
            email    :"johndoe8@wisgen.com",
            phone    :"",
            password :"wisdomcircle8"

        },
        {
            firstname:"",
            lastname :"",
            email    :"johndoe9@wisgen.com",
            phone    :"",
            password :"wisdomcircle9"

        },
        {
            firstname:"",
            lastname :"",
            email    :"johndoe10@wisgen.com",
            phone    :"",
            password :"wisdomcircle10"

        },
    ];
    localStorage.setItem("users", JSON.stringify(users));
}

createApp(App).use(router).mount('#app')
