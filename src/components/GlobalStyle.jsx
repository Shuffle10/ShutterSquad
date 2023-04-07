import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
            *{
                margin: 0;
                padding: 0;
                font-family: 'Lato', sans-serif;
            }

            body{
                min-height: 100vh;
                overflow-x: hidden;
            }
            
            ul{
                list-style: none;
            }

            a{
                text-decoration: none;
                color: white;
            }
            
            `

        
 
export default Globalstyle;