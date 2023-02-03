interface IProgress{
    level:number;
    setLevel:Function;
    setAnswerShema:Function;
    setTimer:Function;
    setTimeOn:Function;
}
function ProgressShema(props:IProgress) {
    function progressHundler(){
        props.setAnswerShema(true)
        props.setTimer(30)
        props.setTimeOn(true)
    }
    return (
      <div>
        <h1>Progress shema. You level is:{props.level}</h1>
        <button onClick={progressHundler}>Next question</button>
      </div>
    );
  }
  export default ProgressShema;