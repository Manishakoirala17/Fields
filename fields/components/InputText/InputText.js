import styles from "./../../styles/InputText.module.css";
export default function InputText() {
  return (
    <div>
      <input
        type={"text"}
        placeholder="placeholder"
        className={styles.inputText}
      ></input>
      <div className={styles.inputGroup}>
        <input type="text" required></input>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Username</label>
      </div>
    </div>
  );
}
