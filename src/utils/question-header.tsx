import headerStyle from "../styles/question-header.module.scss";
function QuestionHeader() {
	return (
		<div className={headerStyle.headerBox}>
			<div className={headerStyle.headerHints}>
				<div className={headerStyle.headerItem}></div>
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
