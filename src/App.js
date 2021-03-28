import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_POSTS);
  console.log({data, loading, error});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
