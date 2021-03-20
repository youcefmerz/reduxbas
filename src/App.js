import React, {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import allActions from './Redux/Actions'
import './App.css';
const App = () => {
  const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  const user = {
    name: "Sara"
  }
  useEffect(() => {
    dispatch(allActions.userActions.login(user))
  }, [])
  return (
    <div className="App">
      <main>
        {
          currentUser.loggedIn ? 
          <>
            <h1>Hello, {currentUser.user.name}</h1>
            <button onClick={()=> dispatch(allActions.userActions.logout())}> Logout</button>
          </>
          :
          <>
            <h1>Login</h1>
            <button onClick={()=> dispatch(allActions.userActions.login(user))}> Login</button>
          </>
        }
        <h1>Counter: {counter}</h1>
        <button onClick={()=> dispatch(allActions.counterActions.decrement())} disabled={counter <=0}> - </button>
        <button onClick={()=> dispatch(allActions.counterActions.increment())}> + </button>
      </main>
    </div>
  );
}
export default App;