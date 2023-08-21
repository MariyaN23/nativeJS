import React from 'react';
import './App.css';

function App() {

    const names = ['Svetlana', 'Dimych', 'Igor', 'Valera']
    const liElements = names.map((el, i) => <li key={i}>{el}</li>)

    const users = [
        {id: 484698, name: 'Svetlana'},
        {id: 8984, name: 'Dimych'},
        {id: 741, name: 'Igor'},
        {id: 4, name: 'Valera'}
    ]

    const usersElements = users.map(ue => <ul key={ue.id}><li>{ue.name}</li></ul>)

    return (
        <div className="App">
                <ul>
                    {liElements}
                </ul>
                {usersElements}
        </div>
    );
}

export default App;
