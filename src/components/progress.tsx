

function Progress() {

	function speakText() {
		window.speechSynthesis.cancel();
		const text = 'Привет Сержук и Андрик. Скоро озвучим наш проект не ссыте! ';
		const utterance = new SpeechSynthesisUtterance(text);
		window.speechSynthesis.speak(utterance);
	}
	return (
		<div style={{
			widows: '100vw', height: '100vh', display: 'flex',
			justifyContent: 'center', alignItems: 'center'
		}} >
			<div className="wrapper">
				<button onClick={speakText} >Прослушать текст</button>
			</div>
		</div>
	);
}
export default Progress;
