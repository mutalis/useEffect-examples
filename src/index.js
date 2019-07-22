import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

function Counter() {
  const [post, setPost] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(data => {
        console.log(post)
        setPost(data)
      })
  }, [])

  const [count, setCount] = useState(0)
  // as a side effect (result) of [value] (state) changing, do this.
  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <p>{JSON.stringify(post)}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
