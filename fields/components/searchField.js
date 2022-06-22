import styles from "./../styles/Dropdown.module.css";
export default function Search() {
  return (
    <div className={styles.searchContainer}>
      <i className="bi bi-search" id={styles.icon}></i>
      <input
        type={"text"}
        name={"search"}
        className={styles.handleChange}
      ></input>
    </div>
  );
}
