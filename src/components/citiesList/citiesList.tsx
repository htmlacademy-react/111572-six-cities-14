type citiesListProps = {
    citiesArray: string[];
}

function citiesList({citiesArray}: citiesListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesArray.map((city) => (
          <li key={city} className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default citiesList;
