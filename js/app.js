import {func} from "./img.js"
import {func2} from "./info.js"
import {func3} from "./card.js"

let a = document.getElementById("sectionOne")

let Obj1 ={
    title: "DOTA 2",
    desc: "Dota 2 is a 2013 multiplayer online battle arena (MOBA) video game by Valve. The game is a sequel to Defense of the Ancients (DotA), a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character known as a heros that all have unique abilities and differing styles of play. During a match players collect experience points and items for their heroes to defeat the opposing team's heroes in player versus player combat. A team wins by being the first to destroy the other team's Ancient, a large structure located within their base.",
    btn:"Download Now!",
    myImg: "../image/1.jpg"
}

let b = document.getElementById("sectionTwo")

let Obj2={
    title2: "Welcome to Dota 2",
    img1: "../image/download.jpg",
    desc1: "The Radiant is a faction in Dota 2 that revolves around light, heat and life. Most of the heroes from the faction are seen as protectors and champions of good.",
    btn1: "LearnMore",
    img2: "../image/images.jpg",
    desc2: "Roshan is a powerful golem that periodically spawns in a creep camp on the Scourge side of the river, near the bottom river rune location.",
    btn2: "Learn More",
    img3: "../image/download1.jpg",
    desc3: "The Dire is a faction in Dota 2. Its hero base revolves around Darkness and Evil. Most of the heroes from the Dire have backgrounds that imply or show their darker sides.",
    btn3: "Learn More"
}

let {title, desc, btn, myImg} = Obj1
a.append(func2(title,desc,btn))
a.append(func(myImg))


let {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
b.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3)) 


