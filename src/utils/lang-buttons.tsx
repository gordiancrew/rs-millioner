import { useState } from "react";

interface ILanBut {
    changeLng: Function;
    hidebutton: boolean;
}

function LangButtons({changeLng, hidebutton}: ILanBut) {
    const buttonsData = [
        {name: 'en', content: 'EN'},
        {name: 'bl', content: 'BL'},
        {name: 'ru', content: 'RU'}
    ];
    const language = localStorage.getItem("languagegame") ? localStorage.getItem("languagegame") : 'ru';
    
    const buttons = buttonsData.map(({name, content}) => {
        const activeLng = name === language;
        const currentClass = activeLng ? 'btnLngSelect btnActive' : 'btnLngSelect';
        return (
            <button
                className={currentClass}
                onClick={() => changeLng(name)}
                key={name}
                type="button"
            >{content}</button>
        )
    });
    if (sessionStorage.getItem('voice')) {

    }
    const stateVoice = sessionStorage.getItem('voice') ? sessionStorage.getItem('voice') === 'true' ? true : false : true;
    const [voice, setVoice] = useState(stateVoice);
    console.log(voice);
    function toogleVoice() {
        setVoice(!voice);
        sessionStorage.setItem("voice", `${!voice}`);
        
    }
    return (
        <div>
            {buttons}
            {hidebutton ? (<button onClick={() => toogleVoice()}
                                    className={voice ? 'btnLngSelect' : 'btnLngSelect btnVoiceNoActive'}
                                    title="On-Off Voice"
                                    >Voice</button>) : null}
        </div>
    )
}
export default LangButtons;