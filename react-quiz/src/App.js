import Header from './Header'
import Main from './Main'
import { useEffect, useReducer } from 'react'

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready'
  status: 'loading'
};

function reducer(state, action) {
  switch(action.type) {
    case 'dataReceived':
      return {
        ...state, question: action.payload, status: "ready",
      };
    case 'dataFailed':
      return {
        ...state, status: "error"
      };
    default:
        throw new Error('Action unknown');
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(function() {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({type: 'dataReceived', payload: data}))
      .catch(() => dispatch({type: 'dataFailed'}))
  }, [])

  return (
    <div className="app">
      <Header></Header>
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  )
}
