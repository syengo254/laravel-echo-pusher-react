import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <>
            <h1>Hello from reacts</h1>
            <p>Using echo redis</p>
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}
