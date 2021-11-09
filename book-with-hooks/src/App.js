import React from 'react';
import './App.css';
import { Search } from './components/Search';
/**
function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                <React.Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}

function Message(props) {
    return (
        <div className="message">
            {props.children}
        </div>
    )
}
const element = (
    <div className="container">
        <Message>
            Outer Layer
            <Message> Inner Layer </Message>
        </Message>
    </div>
)

function SayHello({ firstName, lastName }) {
    return (
        <div>
            Hello {firstName} {lastName}!
        </div>
    )
};
*/

function App() {
    return (
        <header>
            <Search />
        </header>
    );
}

export default App;