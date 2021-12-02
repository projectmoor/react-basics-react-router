import React from 'react'

export default class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = { // get params from props.match.params
      routeParams: props.match.params
    }
  }

  render() {
    console.log(this);
    return <div>
      {/* Movie --- {this.props.match.params.type} --- {this.props.match.params.id} */}

      Movie <br />
      this.state.routeParams.type: {this.state.routeParams.type} <br />
      this.state.routeParams.id: {this.state.routeParams.id}

    </div>
  }
}