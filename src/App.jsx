import React from 'react'
// HashRouter required to wrap around components to set up router
// BrowserRouter can be used to replace HashRouter
// Link required to add a link element, set up path
// Route required to pair component with path  
import { HashRouter, Route, Link } from 'react-router-dom'

import Home from './components/Home.jsx'
import Movie from './components/Movie.jsx'
import About from './components/About.jsx'


// date selector from a react UI library antd
import { DatePicker } from 'antd'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // HashRouter required to wrap around components to set up router (once for the whole app)
    // only one root component allowed in HashRouter
    return <HashRouter>
      <div>
        <h1>React router example</h1>

        {/* <DatePicker></DatePicker> */}

        <hr />
        <p>Link components placed below</p>
        <hr />

        <Link to="/home">Home</Link>&nbsp;&nbsp;
        <Link to="/movie/top250/10">Movie</Link>&nbsp;&nbsp;
        <Link to="/about">About</Link>

        <hr />
        <p>Route components placed below</p>
        <hr />

        {/* use Route to pair component with path */}
        <Route path="/home" component={Home}></Route>

        <hr />

        {/* add 'exact' for precise match; use ':' to set up params; params can be acquired by props.match.params */}
        <Route path="/movie/:type/:id" component={Movie} exact></Route>

        <hr />

        <Route path="/about" component={About}></Route>
      </div>
    </HashRouter>
  }
}