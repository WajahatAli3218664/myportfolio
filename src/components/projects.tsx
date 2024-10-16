import React from 'react'
import Heading from './heading';
import Card from './card';

const data=[
    {
        id: 0,
        title: "Todo List App",
        command: "npx k9_todo_list",
        img:"/todo.jpg",
        tags: ["Typescript", "Nodejs"]
    },
    {
        id: 1,
        title: "Number Guessing",
        command: "npx k9_cli_number_guessing_game",
        img:"/number_guessing_game.jpg",
        tags: ["Typescript", "Nodejs"]
    },
    {
        id: 2,
        title: "Currency Converter",
        command: "npx k9_cli_currency_conveter_project",
        img:"/currency_converter.jpg",
        tags: ["Typescript", "Nodejs"]
    },
    {
        id: 3,
        title: "Calculator",
        command: "npx k6_simple_cli_calculator",
        img:"/calculator.jpg",
        tags: ["Typescript", "Nodejs"]
    },
    {
        id: 4,
        title: "ATM",
        command: "npx k6_cli_atm_project",
        img:"/atm.jpg",
        tags: ["Typescript", "Nodejs"]
    }
];
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading  title='My Projects'/>
        <div  className='grid gap-10xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg::grid-cols-3 place place-items-center'>
            {data.map((el)=>(<Card 
            key={el.id}
            title={el.title}
            command={el.command}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects
