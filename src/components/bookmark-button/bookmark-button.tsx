type BookMarkButtonProps = {
    status: boolean;
    element: 'offer' | 'place-card';
    onToggle: () => void;
  };

export function BookmarkButton({status, element, onToggle}: BookMarkButtonProps): JSX.Element {

  const isActive = status ? `${element}__bookmark-button ${element}__bookmark-button--active button` : `${element}__bookmark-button button`;

  return (
    <button onClick={onToggle} className={isActive} type="button">
      <svg className={`${element}__bookmark-icon`} width={element === 'offer' ? '31' : '18'} height={element === 'offer' ? '33' : '19'}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{status ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;
