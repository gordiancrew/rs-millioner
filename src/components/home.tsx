import SignUp from './signUp';
import '../styles/home.scss'

function Home() {
	return (
		<div className='page'>
			<h1>Home</h1>
			<p>This home-page shows rules of game, your score for previous games,
                you rating, end other things of managering.
                Example: 
                <a href="https://www.mobygames.com/images/shots/l/684797-who-wants-to-be-a-millionaire-junior-windows-screenshot-the.jpg">
                    THIS IMAGE
                </a>
            </p>
            <SignUp/>
            <div className="wrap-hexagon">
                <p className='hexa-text'>Установки игры</p>
            </div>
            <div className="wrap-hexagon">
                <p className='hexa-text'>Начало игры</p>
            </div>
            <div className="wrap-hexagon">
                <p className='hexa-text'>Победители</p>
            </div>
		</div>
	);
}
export default Home;