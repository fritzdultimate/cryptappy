import NotFound from '@/components/ErrorPages/NotFound'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

const routes = [
    {
        path: "/signup",
        component: SignUp
    },
    {
        path: "/signin",
        component: SignIn
    },
    {
        path: "/404",
        component: NotFound
    },
    {
        path: "*",
        redirect: "/404"
    },

];

export default routes;