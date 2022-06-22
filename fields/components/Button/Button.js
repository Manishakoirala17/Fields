import { useEffect, useState } from "react";
import styles from "./../../styles/Buttons.module.css";
import Loader from "./Loader";
export default function Button(props) {
  const {
    name,
    type,
    disabled,
    icon,
    iconPos,
    loadingPos,
    isLoading,
    className,
    badges,
    style,
  } = props;
  const [iconPosition, setIconPos] = useState("left");
  const [loadingPosition, setLoadinPos] = useState("left");
  const classes = () => {
    if (className != null) {
      const list = className.split(" ");
      let classNames = [];
      for (const classnme of list) {
        classNames.push(`${styles[classnme]}`);
      }
      console.log(classNames.join(" "));
      return classNames.join(" ");
    }
  };
  useEffect(() => {
    if (iconPos != null) {
      setIconPos(iconPos);
    }
    if (loadingPos != null) {
      setLoadinPos(loadingPos);
    }
  }, []);

  return (
    <div>
      {type == "link" ? (
        <a href="#" className={styles.link}>
          {name}
        </a>
      ) : (
        <button
          disabled={disabled}
          className={`${styles["dButton"]} ${classes()}`}
          style={style}
        >
          {icon != null && iconPosition == "left" ? (
            <i
              className={icon}
              style={{ marginLeft: "10pt", marginRight: "10pt" }}
            ></i>
          ) : (
            ""
          )}
          {isLoading && loadingPosition == "left" ? <Loader></Loader> : ""}

          {name != null ? <span>{name}</span> : ""}
          {icon != null && iconPosition == "right" ? (
            <i
              className={icon}
              style={{ marginLeft: "10pt", marginRight: "10pt" }}
            ></i>
          ) : (
            ""
          )}
          {isLoading && loadingPosition == "right" ? <Loader></Loader> : ""}
          {badges ? (
            <span className="w3-badge w3-margin-left w3-green">{badges}</span>
          ) : (
            ""
          )}
        </button>
      )}
    </div>
  );
}
