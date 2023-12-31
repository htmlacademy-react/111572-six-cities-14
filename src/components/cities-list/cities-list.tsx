
import { NavLink } from 'react-router-dom';
import { AppRoute, CityName, State, CityMap } from '../../const';
import { useSelector, useDispatch } from 'react-redux';
import { changeCity } from '../../store/actions';


function CitiesListComponent(): JSX.Element {
  const activeCity = useSelector((state: State) => state.city);
  const dispatch = useDispatch();
  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {CityMap.map((city) => (
          <li key={city} onClick={() => dispatch(changeCity(city as CityName))}
            className={`locations__item-link tabs__item ${activeCity === city && 'tabs__item--active'}`}
          >
            <NavLink to={AppRoute.Root} className="locations__item-link tabs__item">
              <span>{city}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesListComponent;
