import { getByTitle } from "@testing-library/react"

import pro2 from "../assets/coming_soon.png"
import pro3 from "../assets/coming_soon.png"
import proiect1 from "../assets/proiect1.png"

const ProjectCardData = [
    {
        imgsrc: proiect1,
        title: "ToDo List",
        text: "Simple ToDo List done using ReactJs and Bootstrap. This simple application is helping me to keep tracking of activities during the day.",
        view: "https://github.com/catacoman1/todolist"
    },
    {
        imgsrc: pro2,
        title: "Coming Soon",
        text: "Working on more projects. I will add them to this Portfolio once i think they are good enough.",
        view: "https://github.com/catacoman1"
    },
    {
        imgsrc: pro3,
        title: "Coming Soon",
        text: "Working on more projects. I will add them to this Portfolio once i think they are good enough.",
        view: "https://github.com/catacoman1"
    },
    
]
export default ProjectCardData