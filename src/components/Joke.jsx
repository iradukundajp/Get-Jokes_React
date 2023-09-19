import PropTypes from 'prop-types';
import './Joke.css';

const Joke = ({ joke }) => {
  const isTwoPart = joke.type === 'twopart';

  return (
    <div className="joke">
      <div>
        {isTwoPart ? (
          <div>
            <p>{joke.setup}</p>
            <p>{joke.delivery}</p>
          </div>
        ) : (
          <p>{joke.joke}</p>
        )}
      </div>
      <div className='btn-container'>
        {Object.entries(joke.flags).map(([key, value]) => (
          <button className={value ? 'red' : 'green'} key={key}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

Joke.propTypes = {
  joke: PropTypes.shape({
    category: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['single', 'twopart']).isRequired,
    setup: PropTypes.string,
    delivery: PropTypes.string,
    joke: PropTypes.string,
    flags: PropTypes.shape({
      nsfw: PropTypes.bool.isRequired,
      religious: PropTypes.bool.isRequired,
      political: PropTypes.bool.isRequired,
      racist: PropTypes.bool.isRequired,
      sexist: PropTypes.bool.isRequired,
      explicit: PropTypes.bool.isRequired,
    }).isRequired,
    safe: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    lang: PropTypes.string.isRequired,
  }).isRequired,
};

export default Joke;
