import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime.js"
function MyApp(){
    return (
        <div>
            <h1>Custom APP !</h1>
        </div>
    )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }
const anotheruser = "Chai piyo aur react sikho"
const anotherElement = React.createElement(
    'a',
    {href:"https://google.com", target: '_blank'},
    "click karo google visit karo",
    anotheruser
)
const reactelement =(
    <a href="https://google.com" target='_blank'> Visit google</a>
)

createRoot(document.getElementById('root')).render(
 
    anotherElement
  
)
