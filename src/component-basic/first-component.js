import React from 'react';
import ReactDOM  from 'react-dom';

function FirstComponent(){
    return <div>First Component</div>
}

function Helloworld(){
    return <h1>Hello, world!</h1>
}

// 함수 선언식을 통해서 컴포넌트 정의 가능
function Cat() {
    return <div>🐱</div>
}

// 함수 표현식을 통해서 컴포넌트 정의 가능
const Dog = function() {
return <div>🐶</div>
}

// 화살표 함수로 컴포넌트 정의 가능
const Pig = () => <div>🐷</div>
function AnimalContainer() {
    return (
        /* 일반적인 태그 사용 가능 */
        <div style={{fontSize: "100px"}}>
            {/* 이미 정의한 컴포넌트들도 JSX 내부에서 사용 가능 */}
            <Cat />
            <Dog />
            <Pig />
        </div>
    )
}


//파라미터의 개수가 하나면 소괄호 생략 가능
//중괄호 안쓰면 해당 식이 평가된 값이 바로 반환됨
const double = x => 2*x;
//파라미터의 개수가 없으면 소괄호 써줘야 함
const sayHello = () => console.log('Hello');


ReactDOM.render(<AnimalContainer/>, document.getElementById('root'))