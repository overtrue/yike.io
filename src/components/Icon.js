import React from 'react'

export default class Icon extends React.Component {
  render() {
    return <i className={`mdi mdi-${this.props.name}`} />
  }
}
