import React from 'react'

export default class ThreadItem extends React.Component {
  render() {
    const thread = this.props.thread
    const author = this.props.thread.user
    return (
      <div className="flex p-3">
        <div class="mr-8">
          <img src={author.avatar} className="h-12 rounded-full" alt="" />
        </div>
        <div>
          <h3 className="text-lg text-gray-800">{thread.title}</h3>
          <p class="text-gray-500 text-sm">
            <span>{author.name}</span>
            <span className="mx-4">{thread.created_at_timeago}</span>
            <span>5 条回复</span>
          </p>
        </div>
      </div>
    )
  }
}
