import DefaultProfile from "./DefaultProfile"
import ErrorPage from "./ErrorPage"
import Home from "./Home"
import Popeye from "./Popeye"
import Profile from "./Profile"
import Spinach from "./Spinach"


const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage/>
    },
    {
      path:'profile/:name',
      element: <Profile />, 
      children:[
        {index: true, element:<DefaultProfile/>},
        {path:'spinach', element:<Spinach />},
        {path:'popeye', element:<Popeye />}
      ]
    }
  ]

export default routes