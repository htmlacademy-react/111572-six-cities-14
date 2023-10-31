import { Link } from 'react-router-dom';
import classes from './error.module.css';

function NotFoundPage():JSX.Element{
  return (
    <div className={classes['container']}>
      <section className={classes['left-side']}>
        <h1 className={classes['left-side__title']}>Страница не найдена</h1>
        <Link className={classes['left-side__link']} to='/'>Вернуться на главную</Link>
      </section>
      <section className={classes['right-side']}>
        <img src="../img/amsterdam.jpg" alt="Amsterdam" />
      </section>
    </div>
  );
}

export default NotFoundPage;
