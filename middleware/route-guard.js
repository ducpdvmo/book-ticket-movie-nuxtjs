// export default function ({ app }) {

//     app.router.beforeResolve((to, from, next) => {
//         let excludePages = ['/auth/login', '/auth/register']
//         let user = localStorage.getItem('token')
//         if(!user)
//         if (!app.store.getters.isLogged) {
//             next('/auth/login')
//         } else {
//             next();
//         }
//     });

// }
