import styles from './navButton.module.sass'
export function NavButton({id, src, count}) {
  return (
    <div className={styles.nav__link}>
      <input className={styles.nav__link_img} key={id} type='image' src={src} alt={id} />
      {!!count && <div className={styles.nav__count_wrapper}>
        <div className={styles.nav__count}>{count}</div>
      </div>}
    </div>
  );
}