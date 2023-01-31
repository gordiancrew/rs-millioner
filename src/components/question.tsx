import { dataQuestion } from "../data/questions";
import { IQuestion } from "../types.ts/iquestion";

function Question() {
	const question:IQuestion=dataQuestion[0][0];
	return (
		<div>
			<h1>Question</h1>
			<p>This page shows current question and timer.
                Like this example: 
                <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_bBXDGTVlh8wrvw7L837NnaJ35L7_xNIyv-xCV5Toz6A-9SQSjaYwgMKyYL26jp3VRA&usqp=CAU">
                    EXAMPLE
                </a>
            </p>
			<h4>{question.ask}</h4>
			<h5>{question.ans[0].content}</h5>
			<h5>{question.ans[1].content}</h5>
			<h5>{question.ans[2].content}</h5>
			<h5>{question.ans[3].content}</h5>
		</div>
	);
}
export default Question;