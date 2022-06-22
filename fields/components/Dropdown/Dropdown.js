import { useEffect, useState } from "react";
import styles from "./../../styles/Dropdown.module.css";
import Search from "./../searchField";
export default function Dropdown(props) {
  const {
    options,
    optionLabel,
    optionGroupLabel,
    optionItems,
    optionGroupChildren,
    placeholder,
    handleChange,
  } = props;
  const [isShowOptions, setShow] = useState(false);
  const [isEditable, setEditable] = useState(false);
  const [value, setValue] = useState("");
  const [isGrouped, setGrouped] = useState(false);
  const [isSearch, setSearch] = useState(false);
  function selectValue(value) {
    alert(value);
  }
  function clickSelectBtn() {
    setShow(!isShowOptions);
  }
  const listoptions = [];
  function dropdownOptions() {
    options.map((item) => {
      return listoptions.push(
        <div>
          <a href="#">{item[optionLabel]}</a>
        </div>
      );
    });
  }
  function isDisable() {
    if (isEditable) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className={styles.dropDownContainer}>
      <div className={styles.dropDownBtn}>
        <input
          type="text"
          className={styles.dropInput}
          placeholder={placeholder}
          value={value}
          disabled={isDisable()}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <i className="bi bi-caret-down" onClick={clickSelectBtn}></i>
      </div>

      {isShowOptions ? (
        <div className={styles.dropDownOptions}>
          {isSearch ? (
            <div align="center">
              <Search></Search>
            </div>
          ) : (
            ""
          )}
          <div>
            {optionGroupLabel != null ? (
              <div>
                {options.map((group) => {
                  return (
                    <div key={group}>
                      <div className={styles.groupName}>
                        <i
                          className="bi bi-flag"
                          style={{ marginRight: "5pt" }}
                        ></i>
                        {group[optionGroupLabel]}
                      </div>
                      {group[optionGroupChildren].map((item) => {
                        return (
                          <div
                            className={styles.optionsGroup}
                            key={item}
                            onClick={() => setValue(item[optionLabel])}
                          >
                            <a href="#">{item[optionLabel]}</a>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                {options.map((item) => {
                  return (
                    <div onClick={() => setValue(item[optionLabel])} key={item}>
                      <a href="#">{item[optionLabel]}</a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
