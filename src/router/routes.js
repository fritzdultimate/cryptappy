import NotFound from '@/components/ErrorPages/NotFound'
import SignUp from '@/components/SignUp'

const routes = [
    {
        path: "/signup",
        component: SignUp
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