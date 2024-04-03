import HomePage from 'containers/HomePage'
import PeoplePage from 'containers/PeoplePage'
import Header from 'components/header'
import RootLayout from 'layouts/RootLayout'
import styles from "./Styles.module.css"
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import NotFoundPage from 'containers/NotFoundPage'
import PersonPage from 'containers/PersonPage'
import FavoritePage from 'containers/FavoritePage'
import SearchPage from 'containers/SearchPage'
import ErrorMessage from 'components/PeoplePage/ErrorMessage'
import { REP_NAME } from 'constants/rep'

const routesConfig = [

    {
        path: 'people',
        element: <PeoplePage />,
        exact: false
    },
    {
        path: 'people/:id',
        element: < PersonPage />,

    },

    {
        path: '*',
        element: <NotFoundPage />,
        exact: false
    },
    {
        path: 'fail',
        element: <ErrorMessage />,
        exact: false
    },
    {
        path: 'notfound',
        element: <NotFoundPage />,
        exact: false
    },
    {
        path: 'favorites',
        element: <FavoritePage />,
        exact: false
    },
    {
        path: 'search',
        element: <SearchPage />,
        exact: false
    },

]

const routes = createBrowserRouter(

    createRoutesFromElements(



        <Route   path="/" element={<RootLayout />} >

            <Route    index element={<HomePage />} />
            {routesConfig.map((route, index) => (
                <Route {...route} key={index} />
            ))}

        </Route>



    )
)

export default routes