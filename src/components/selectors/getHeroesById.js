import { heroes } from "../../data/heres";

export const getHeroesById = (id) => {
    return heroes.find(hero => hero.id === id)
}