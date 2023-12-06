import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sort, State } from '../../const';
import { changeSort } from '../../store/actions';

function FormSort(){
  const [opened, setOpened] = useState<boolean>(false);
  const activeSorting = useSelector((state: State) => state.sort);
  const dispatch = useDispatch();

  function handleToggle(): void {
    setOpened(!opened);
  }

  function handleChangeSorting(item: Sort): void {
    dispatch(changeSort(item));
    setOpened(false);
  }
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => handleToggle()}>
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${opened ? 'places__options--opened' : ''}`}>
        {Object.values(Sort).map((item) => (
          <li
            key={item}
            className={`places__option ${activeSorting === item ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleChangeSorting(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default FormSort;
