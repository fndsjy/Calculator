import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function display(number) {
    let resultScreen = document.getElementById("resultScreen");
    resultScreen.value += number;
}

function calculate(e) {
    e.preventDefault()
    let resultScreen = document.getElementById("resultScreen");
    try {
        resultScreen.value = eval(resultScreen.value);
    } catch (error) {
        alert('Invalid calculation. Please try again!');
    }
}

function clear(e) {
    e.preventDefault()
    let resultScreen = document.getElementById("resultScreen");
    resultScreen.value = "";
}

function del(e) {
    e.preventDefault()
    let resultScreen = document.getElementById("resultScreen");
    resultScreen.value = resultScreen.value.slice(0, -1);
}

export {display, calculate, clear, del};