import cl from "../styles/start.module.scss";

function Hexagon(props: any) {
  //   console.log(props.content);
  return (
    <div className={cl.wrapper}>
      <div className={cl.horizontLine}></div>
      <div className={cl.questionBox}>
        <div className={cl.questionContent}>{props.content}</div>
      </div>
      <div className={cl.horizontLine}></div>
    </div>
  );
}

export default Hexagon;
