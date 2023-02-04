import headerStyle from "../styles/question-header.module.scss";
interface IHeaderOptions{
	setVisibleHintBoolean:Function;
	setTimeOn:Function;
}
function QuestionHeader(props:IHeaderOptions) {
	function booleanHundler(){
		props.setVisibleHintBoolean(true)
		props.setTimeOn(false)
	}
	return (
		<div className={headerStyle.headerBox}>
			<div className={headerStyle.headerHints}>
				<div
				onClick={booleanHundler}
				className={headerStyle.headerItem}>Boolean</div>
				<div className={headerStyle.headerItem}></div>
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
