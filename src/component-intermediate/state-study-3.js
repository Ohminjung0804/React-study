import Reaact,{useState} from 'react';
import ReactDOM from 'react-dom';

const StateDemoComponent = function(props){
    const [state,setState] = useState({
        value1:"hello",
        value2: 1000
    })

    return(
        <div>
            <button onClick={()=>{
                if(state.value1 === "hello"){
                    setState({...state, value1:"bye"})
                }else{
                    setState({...state, value1:"hello"})
                }
            }}>{state.value1}
            </button>
            <button onClick={()=>{
                setState({...state, value2:state.value2 *2})
            }}>{state.value2}
            </button>
        </div>
    )
}

ReactDOM.render(
    <StateDemoComponent></StateDemoComponent>,
    document.getElementById('root')
)