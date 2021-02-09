import React, { useMemo } from 'react'
import { getHeoresByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeoresByPublisher(publisher), [publisher])

    // const heroes = getHeoresByPublisher(publisher)

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />

                ))
            }
        </div>
    )
}
