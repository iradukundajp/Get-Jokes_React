import { useState } from 'react';
import './JokeContainer.css';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Joke from './Joke';


const JokeContainer = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const getJoke = async () =>{
            try {
                const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
                if(response.status === 200) {
                    setJoke(response.data);
                } else {
                    throw new Error(
                         `Failed to get a joke with status ${response.status}`
                   );
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
    };
    getJoke();
    }, [count]);
    
    const getJokeHandler = () =>{
        setCount((prevCount) => prevCount +1);
    };
    return (
        <div className='container'>
            <div className='btn-wrapper'>
                <button className='btn' onClick={getJokeHandler}>
                    Get another Joke
                </button>
            </div>
            {loading && <Loading />}
            {error && <p className='error'>{error}</p>}
            {joke && <Joke joke={joke} />}
        </div>
    );
};

export default JokeContainer;