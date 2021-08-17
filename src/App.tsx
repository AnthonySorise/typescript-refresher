import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

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


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    TypeScript Refresher
                </p>
            </header>
        </div>
    );
}

export default App;




        //Scope on Funciton Level       //Can Be Changed        //Hoisting Works
//VAR               X                          X                       X


//LET                                          X


//CONST
