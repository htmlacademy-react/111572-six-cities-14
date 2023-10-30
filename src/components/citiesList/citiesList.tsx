type CitiesListProps = {
    citiesList: string[];
}

function CitiesListComponent({citiesList}: CitiesListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesList.map((city) => (
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

export default CitiesListComponent;
