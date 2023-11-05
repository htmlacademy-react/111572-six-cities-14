
import{ useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './style.module.css';

type CitiesListProps = {
    citiesList: string[];
}

function CitiesListComponent({citiesList}: CitiesListProps): JSX.Element {
  const [activeLink, setActiveCity] = useState(0);

  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {citiesList.map((city, index) => (
          <li key={city} onClick={() => setActiveCity(index)}
            className={activeLink === index ? classes['active'] : ''}
          >
            <Link to="/" className="locations__item-link tabs__item">
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesListComponent;
