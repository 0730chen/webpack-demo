import _ from 'lodash'
import print from'./print.js'
import './style.css'
import './style.scss'
import './style.less'
import './style.styl'
import shit from './main.shit'

console.log(typeof shit,shit);

function component() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')
    const btn = document.createElement('button')
    btn.innerText = 'print'
    btn.onclick = print
    element.appendChild(btn)
    return element;
}

document.body.appendChild(component());
console.log(`ssss`)
console.log('aaa')