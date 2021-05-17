import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button'; 
import Display from '../components/Display'; 

//Usar classe é para trabalhar com estados, isso se torna trabalhoso e pode gerar bugs. 
//Por isso, sempre que puder, trabalhe com componentes passados por parâmetros.
export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Display value={0}></Display>
                <Button className="operation" label="AC"/>
                <Button className="operation" label="/"/>  
                <Button label="7"/>  
                <Button label="8"/>  
                <Button label="9"/>  
                <Button className="operation" label="*"/>  
                <Button label="4"/>
                <Button label="5"/>  
                <Button label="6"/>
                <Button className="operation" label="-"/>
                <Button label="1"/>  
                <Button label="2"/>  
                <Button label="3"/>
                <Button className="operation" label="+"/>
                <Button label="0"/>
                <Button className="operation" label="."/>  
                <Button className="operation" label="="/>                         
            </div>
        )
    }
}