import { useEffect} from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute, State, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { logout } from '../../store/api-action';
import { fetchFavorites } from '../../store/api-action';


function Header(): JSX.Element {
  const favorites = useAppSelector((state: State) => state.favorites);
  const user = useAppSelector((state: State) => state.user);
  const authStatus = useAppSelector((state: State) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const handleClick = useCallback((): void => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            {authStatus === AuthorizationStatus.Auth ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to="#" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      <img src={user?.avatarUrl} alt={user?.avatarUrl} />
                    </div>
                    <span className="header__user-name user__name">{user?.name}</span>
                    <span className="header__favorite-count">{favorites.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link onClick={handleClick} to={AppRoute.Root} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
              :
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
