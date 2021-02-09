import { heroes } from "../../data/heres"


export const getHeroesByName = (name = '') => {
    if (name === '') return []
    else return heroes.filter(hero => hero.superhero.toLowerCase().includes(name.toLowerCase()))
}