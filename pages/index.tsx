import styles from './styles.scss';

export default () => (
  <div className="wrap">
    <style jsx>{styles}</style>
    Hello world
    <p className="contents">scoped!</p>
  </div>
);
