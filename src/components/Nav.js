import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '~/images/yike.svg'

export default function HomePage() {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto h-16 flex items-center justify-between pl-4">
        <Link to="/">
          <img src={Logo} alt="" className="h-10" />
        </Link>
        <div className="text-blue-500">
          <Link to="/auth/login" className="mr-4">
            登录
          </Link>
          <Link to="/auth/login">注册</Link>
        </div>
      </div>
    </div>
  )
}
