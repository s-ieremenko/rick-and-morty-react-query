import React, { useState } from 'react';
import { useQuery } from 'react-query'
import axios from 'axios'
import Character from "./Character";
import Loader from "./Loader";
import Error from "./Error";

const CharacterList = () => {
    const [page, setPage] = useState(1)

    const fetchCharacters = async ({ queryKey }) => {
        const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        return res.data
    }

    const { data, status, error, isLoading, isPreviousData } = useQuery(['characters', page], fetchCharacters, {
        keepPreviousData: true
    })


    if (status === 'loading') {
        return <div className='loading-container'>
            <Loader/>
        </div>
    }
    if (status === 'error') {
        return <Error error={error}/>

    }

    if (status === 'success') {
        return (
            <>
                <div className='list-container'>
                    {data.results.map(character => {
                        return <Character key={character.id} character={character}/>
                    })}
                </div>
                <div className='btn'>

                    <button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>previous</button>
                    <button disabled={isPreviousData || !data.info.next} onClick={() => setPage((old) => old + 1)}>next
                    </button>
                </div>

            </>
        );
    }
};

export default CharacterList;