
import{sum} from "./calc";
import "./calc"

console.log(sum(3,2,3));

const root=document.getElementById("root");
const h1=document.createElement('h1');
h1.innerText="Hello World";
h1.setAttribute("class","redtext");
root.append(h1);