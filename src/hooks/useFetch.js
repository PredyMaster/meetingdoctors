import { useState, useEffect } from "react";

const API_URL = 'https://rickandmortyapi.com/api/character';

const useFetch = () => {
    const [ricks, setRicks] = useState([]);

    useEffect(() => {
        
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setRicks(data.results))

    }, [])
    
    return [ricks];
}

export default useFetch;