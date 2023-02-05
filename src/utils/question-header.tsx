import headerStyle from "../styles/question-header.module.scss";
interface IHeaderOptions {
  setVisibleHintBoolean: Function;
  setTimeOn: Function;
  itemHintBoolean: boolean;
  setItemHintBoolean: Function;
  itemFiftyFifty: boolean;
  setItemFiftyFifty:Function;
  setFiftyFiftyStyle:Function;
  setTimer:Function;
}
function QuestionHeader(props: IHeaderOptions) {
  function booleanHundler() {
    props.setVisibleHintBoolean(true);
    props.setTimeOn(false);
  }

  function fiftyFiftyHundler(){
    props.setItemFiftyFifty(true)

    props.setFiftyFiftyStyle({backgroundColor:'white'})
    
    props.setTimeOn(false)
 


  }
  return (
    <div className={headerStyle.headerBox}>
      <div className={headerStyle.headerHints}>
        <div
          onClick={!props.itemHintBoolean ? booleanHundler : () => {}}
          style={{ backgroundColor: props.itemHintBoolean ? "black" : "" }}
          className={headerStyle.headerItem}
        >
          Boolean
        </div>
        <div
        onClick={!props.itemFiftyFifty ? fiftyFiftyHundler : () => {}}
         style={{ backgroundColor: props.itemFiftyFifty ? "black" : "" }}
        className={headerStyle.headerItem}>
          50:50
        </div>
        <div className={headerStyle.headerItem}></div>
      </div>
      <div className={headerStyle.headerHints}>
        <div className={headerStyle.headerItem}></div>
        <div className={headerStyle.headerItem}></div>
      </div>
    </div>
  );
}
export default QuestionHeader;
