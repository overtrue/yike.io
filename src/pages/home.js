import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import ActiveUsers from '~/components/ActiveUsers'
import Icon from '~/components/Icon'
import Threads from '~/components/Threads'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      threads: {
        data: [],
      },
      loading: true,
    }
  }
  componentDidMount() {
    const getThreads = async () => {
      const { data } = await axios('http://yike.test/api/threads')
      this.setState({ threads: data, loading: false })
    }
    getThreads()
  }
  render() {
    return this.state.loading ? (
      <div>Loading...</div>
    ) : (
      <div className="container mx-auto">
        <div className="mt-12 flex">
          <div className="flex-1">
            <div class="flex items-center justify-between mb-4">
              <div className="pl-4">
                <h2 className="text-xl font-medium">热门讨论</h2>
                <p className="text-gray-500">查看全部 560 条讨论</p>
              </div>

              <Link to="threads/create" className="text-white py-2 px-6 bg-blue-600 rounded-full">
                <Icon name="plus" />
                <span className="ml-2">新建讨论</span>
              </Link>
            </div>
            <Threads threads={this.state.threads.data} />
          </div>
          <div class="w-16" />
          <div className="w-75">
            <div class="mb-6">
              <h2 className="text-xl font-medium pl-3">活跃用户</h2>
              <p className="text-gray-500 pl-3">根据用户表帖数、回帖数以及点赞等行为综合计分排行</p>
            </div>
            <ActiveUsers />
          </div>
        </div>
      </div>
    )
  }
}
