import App from "../App"
import Shopping from '../Pages/Shopping'
import Cart from "./Cart"

const routes = [
    {
     path: '/',
     element: <App/>,   
    },
    {
        path: 'shopping',
        element: <Shopping />,
    },
    {
        path:'shopping/cart',
        element: <Cart />
    }

]

export default routes