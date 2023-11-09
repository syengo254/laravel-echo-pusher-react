import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

    const triggerEvent = async () => {
        const resp = await window.axios.get('/send');
        console.log(await resp.data);
    };

    return (
        <>
            <h1>Hello from reacts</h1>
            <p>Using echo redis comps.</p>

            <button type='button' onClick={triggerEvent}>Click me to send</button>
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
