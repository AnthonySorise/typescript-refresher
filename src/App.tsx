import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateComponent from './UseStateComponent';
import UseEffectComponent from './UseEffectComponent';
import UseContextComponent from './useContextComponent'
import UseReducerComponent from './UseReducerComponent'
import UseRefComponent from './useRefComponent';
import CustomHookComponent from './useCustomHook';
import PropsExampleComponent from './PropsExampleComponent'

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    React + TypeScript
                </p>

                <h2>useState</h2>
                <UseStateComponent />
                <h2>useEffect</h2>
                <UseEffectComponent />
                <h2>useContext</h2>
                <UseContextComponent />
                <h2>useReducer</h2>
                <UseReducerComponent />
                <h2>useRef</h2>
                <UseRefComponent />
                <h2>useCustomHook and useMemo</h2>
                <CustomHookComponent />
                <h2>Props Example</h2>
                <PropsExampleComponent text="this is a prop"/>
            </header>
        </div>
    );
}

export default App;





//***Typescript***
//TYPES
let someNumber:number = 23;
someNumber = 24;
let someAny:any = 23;
someAny = "24";

//CUSTOM TYPES
type CustomType = "option01" | "option02" | "option03" | null;
let customType01:CustomType = "option03";
let customType02:CustomType = null;

//FUNCTION
const someFunction = (someNumInput:number):number =>
{
    return someNumInput + 1;
}

//INTERFACE
interface Person {
    firstName: string;
    lastName: string;
    isEmployed: boolean;
    department: "deptA" | "deptB" | false;
}
const john:Person  = {
    firstName: "john",
    lastName:"doe",
    isEmployed:false,
    department:false
}

//STRONG TYPE ARRAYS
let someArrayOfNums:number[] = [];
someArrayOfNums.push(someFunction(1));

let someArrayOfPersons:Person[] = [];
someArrayOfPersons.push(john);

// TYPE ARRAYS
type typeArray = [number, string, boolean?];
const typeArray01:typeArray = [1, "1", false];
const typeArray02:typeArray = [2, "2"]


        //Scope on Funciton Level       //Can Be Changed        //Hoisting Works
//VAR               X                          X                       X


//LET                                          X


//CONST
