import logo from './logo.svg';
import './App.css';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import { useEffect } from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const query = `
  query AllToDoQuery {
  getTodos {
    title
    id
    user {
      name
      id
    }
  }
}
`

function App() {
  useEffect(()=>{
    // we can add ApolloProvider also to react app instead of this below code.
    client.query({
      query: gql`${query}`,
    }).then(result => {
      console.log(result)
    })
  });

  return (
    <div className="App">
       Data in console.log
    </div>
  );
}

export default App;
