import React from 'react';
import ReactDOM from 'react-dom';

const ComponentWithProps = function(props){
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

//배열 비구조화 할당
const arr = [100,200];
const [v1, v2] = arr;

 //같음
// const v1 = arr[0];
// const v2 = arr[1];

//객체 비구조화 할당
const user = {name : "Hohn", age:20}
// const {name, age} = user;

const name = "Hello";
const {name:n, age} = user;
//같음
// const name = user.name;
// const age = user.age;

function f1({name:n, age}){
    console.log(name,age);
}

function f2(user){
    const name = user.name;
    const age = user.age;
    console.log(name,age);
}

ReactDOM.render(
    <div>
        <ComponentWithProps value="Hello" />
        <ComponentWithProps value={1} />
        <ComponentWithProps value={{a:1, b:"React"}} />
        <ComponentWithProps value={() => {  }} />
    </div>,document.getElementById('root'))