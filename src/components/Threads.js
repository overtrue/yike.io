import React from 'react'
import ThreadItem from '~/components/ThreadItem'

export default class Threads extends React.Component {
  render() {
    const threads = this.props.threads || []
    const listItems = threads.map(thread => (
      <li className="hover:bg-gray-100 rounded-lg">
        <ThreadItem key={thread.id} thread={thread} />
      </li>
    ))
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    )
  }
}
