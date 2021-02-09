import { heroes } from "../../data/heres";

export const getHeoresByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics']
    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher ${publisher} not valid`)
    }
    return heroes.filter(hero => hero.publisher === publisher)
}