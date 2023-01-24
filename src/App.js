import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query'
import CharacterList from "./components/CharacterList";

const queryClient = new QueryClient()

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <div className="container">
                    <h1>Rick and Morty</h1>
                    <CharacterList/>
                </div>
            </QueryClientProvider>


        </div>
    );
}

export default App;
