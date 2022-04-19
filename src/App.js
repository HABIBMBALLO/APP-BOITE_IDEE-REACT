import Header from './components/Header';
import Formulaire from './components/Formulaire';
import ListeCarte from './components/ListeCarte';
import FormSection  from './components/FormSection';
import Graph  from './components/FormSection';
import Filtre  from './components/FormSection';

import './App.css';

function App() {
    return (
        <div className="App">

            <Header/>
            <Formulaire/>
            <ListeCarte/>
            <FormSection/>
            <Graph/>
            <Filtre/>
        </div>
    );
}

export default App;
