import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
            *{
                margin: 0;
                padding: 0;
            }

            body{
                font-family: 'Lato', sans-serif;
            }
            
            ul{
                list-style: none;
            }

            a{
                text-decoration: none;
                color: black;
            }
            
            `

        
 
export default Globalstyle;