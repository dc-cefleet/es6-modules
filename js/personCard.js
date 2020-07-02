import {uuid, randomNumber} from "./utilities.js";
import {createElement} from "./elements.js";

export default (person)=>{
    return createElement(
        "div", 
        {class:"card", id:randomNumber(100)},
        createElement('ul',{id:randomNumber(100)}, [
            createElement("li", {id:uuid()}, `name: ${person.name}`),
            createElement('li', {id:uuid()}, `birthyear: ${person.birth_year}`)
        ])
    )
}