import getAPI from "./fetcher.js";
import {queryElement as $, createElement} from "./elements.js";
import personCard from "./personCard.js"
const start = async () =>{

    let body = $("body");
    body.innerText = "Loading ..."
    
    let result = await getAPI("https://swapi.dev/api/people/1/")
    
    body.innerText = "";

    let person = personCard(result)
    personCard({name:"clint", birth_year:'1981'})
    body.append(person,personCard({name:"clint", birth_year:'1981'}))
};

start();
