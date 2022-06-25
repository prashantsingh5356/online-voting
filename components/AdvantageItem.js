import classes from "./AdvantageItem.module.css";

const AdvantageItem = (props) => {
  return <div className={classes.advantageItem}>{props.children}</div>;
};

export default AdvantageItem;
