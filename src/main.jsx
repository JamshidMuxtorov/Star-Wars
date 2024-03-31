import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'containers/App'
import './index.css'
import store from "./store/store"
import { Provider } from 'react-redux'
import ThemeProvider from 'Context/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>

)
