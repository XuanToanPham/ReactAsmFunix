import classes from "./NotifyLoading.module.css";
const NotifyLoading = () => {
  return (
    <div className={classes.mainLoader}>
      <div className={classes.loader}>
        <span></span>
        <span></span>
        <span></span>
        <h2>Loading ... </h2>
      </div>
    </div>
  );
};

export default NotifyLoading;
