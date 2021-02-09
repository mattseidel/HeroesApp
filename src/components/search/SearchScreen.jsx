import React, { useMemo, useState } from 'react'
import { heroes } from '../../data/heres'
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../selectors/getHeroesByName';
export const SearchScreen = ({ history }) => {

    const location = useLocation()



    const { q = '' } = queryString.parse(location.search)

    const [formValues, handleInputChanges] = useForm({
        searchText: q
    })

    const { searchText } = formValues


    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])


    const filterHeroes = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={filterHeroes}>
                        <input type="text"
                            className='form-control'
                            placeholder='Find your hero'
                            value={searchText}
                            onChange={handleInputChanges}
                            name='searchText'
                            autoComplete='off'
                        />
                        <button type="submit" className="btn m-1 btn-outline-primary btn-block">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        q === '' &&
                        (<div className="alert alert-info">Search a hero</div>)
                    }

                    {
                        q !== '' && heroesFiltered.length === 0 &&
                        (<div className="alert alert-danger">There's not hero to show</div>)
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
