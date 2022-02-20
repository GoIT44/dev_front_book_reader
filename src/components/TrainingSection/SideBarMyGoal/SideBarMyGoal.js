import style from "./SideBarMyGoal.module.css";

const SideBarMyGoal = () => {
  return (
    <div className={style.sideBar}>
      <h3 className={style.sideBarTitle}>Моя мета прочитати</h3>
      <ul className={style.sideBarList}>
        <li className={style.sideBarItem}>
          <p className={style.sidebarNumber}>3</p>
          <p className={style.sideBarText}>Кількість книжок</p>
        </li>
        <li className={style.sideBarItem}>
          <p className={style.sidebarNumber}>3</p>
          <p className={style.sideBarText}>Кількість днів</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBarMyGoal;
