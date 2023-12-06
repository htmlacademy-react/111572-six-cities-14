import classes from './spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={classes['.spinner-container ']}>
      <h1>Ждите пока загрузится</h1>
      <span className={classes['.loader']}></span>
    </div>
  );
}

export default Spinner;
