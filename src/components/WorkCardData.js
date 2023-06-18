import { getByTitle } from "@testing-library/react"

import proiect2 from "../assets/proiect2.png"
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
        imgsrc: proiect2,
        title: "Access App",
        text: "Access into a Company Mobile App done for university project using React-Native and TypeScript",
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