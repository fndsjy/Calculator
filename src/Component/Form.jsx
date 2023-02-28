import {display, calculate, clear, del} from '../index';

function Form() {
    return (
        <div className={"container-fluid"}>
            <form className={"calculator text-center"}>
                <input type={"text"} placeholder={0} id={"resultScreen"} />
                <button onClick={clear} className={"button"}>AC</button>
                <button onClick={del} className={"button"}>CE</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    display('%')}} className={"button"}>%</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('/')}} className={"button"}>/</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('7')}} className={"button"}>7</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('8')}} className={"button"}>8</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('9')}} className={"button"}>9</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('*')}} className={"button"}>*</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('4')}} className={"button"}>4</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('5')}} className={"button"}>5</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('6')}} className={"button"}>6</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('-')}} className={"button"}>-</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('1')}} className={"button"}>1</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('2')}} className={"button"}>2</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('3')}} className={"button"}>3</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('+')}} className={"button"}>+</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('.')}} className={"button"}>.</button>
                <button onClick={(e) => { 
                    e.preventDefault()
                    display('0')}} className={"button"}>0</button>
                <button onClick={calculate} className={"button calculate"}>=</button>
            </form>
        </div>
    );
}

export default Form;