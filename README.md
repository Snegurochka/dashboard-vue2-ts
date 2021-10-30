# Seller Dashboard

## Pages:
- Dashboard - Shows an awesome sales chart via vue-chartjs. https://vue-chartjs.org/
- Products List
- Product details
- Adding product - the form uses Base Components (BaseInput, Base Select, etc.) for the same behavior and style. I used the "vuelidate" library for form validation.
https://github.com/vuelidate/vuelidate
<p>
<img src="https://vuelidate-next.netlify.app/logotype.png" alt="vue-chartjs" width="200px">
<img src="https://vue-chartjs.org/vue-chartjs.png" alt="Vuelidate" width="200px">
</p>

## Technologies used: 

### Firebase REST API.
All the requests to the REST endpoints are stored in the API.ts file.
https://firebase.google.com/docs/reference/rest/database

### Vue 2 and Vuex.
I love working with this framework because it is very easy to use and really efficient for getting things done.
Store is divided into modules: products, user, notifications.
<p>
<img src="https://vuejs.org/images/logo.svg" alt="Vue 2" width="140px">
</p>

### TypeScript. JS for Components.
I think that the use of TypeScript in the parts working with data is vitally important. 
So I used TypeScript in Vuex, Routers and API.
