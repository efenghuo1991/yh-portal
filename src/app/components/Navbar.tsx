'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">萤火智创</span>
            </Link>
          </div>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">首页</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">关于我们</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">产品服务</Link>
            <Link href="/contact" className="btn-primary">联系我们</Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">首页</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">关于我们</Link>
              <Link href="/products" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">产品服务</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">联系我们</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}