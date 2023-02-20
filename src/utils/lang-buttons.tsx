interface ILanBut {
    changeLng: Function;
    onoffvoice: Function;
    hidebutton: boolean;
}

function LangButtons({changeLng, onoffvoice, hidebutton}: ILanBut) {
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
    })
    return (
        <div>
            {buttons}
            {hidebutton ? (<button onClick={onoffvoice()}>Vc</button>) : null}
        </div>
    )
}
export default LangButtons;