import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              智能会员管理系统
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              为商家提供一站式会员管理解决方案
            </p>
          </div>
        </div>
      </section>

      {/* 产品展示区 */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                沃客卡包会员管理小程序
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>专业的会员管理工具，助力商家数字化转型</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    会员卡办理与管理
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    快捷消费与充值
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    门店收银一体化
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    员工权限管理
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <a href="#contact" className="btn-primary inline-block">
                  立即体验
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-[300px] h-[600px]">
                <div className="bg-gradient-to-r from-blue-100 to-green-100 absolute inset-0 rounded-3xl transform rotate-3"></div>
                <Image
                  src="/images/products/show.png"
                  alt="沃客卡包会员管理小程序"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="relative rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">核心优势</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">快速部署</h3>
              <p className="text-gray-600">
                无需复杂安装，扫码即可使用，让您的业务快速数字化
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">安全可靠</h3>
              <p className="text-gray-600">
                数据加密存储，多重安全保障，保护您的业务数据
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">功能完善</h3>
              <p className="text-gray-600">
                会员管理、收银系统、数据分析一应俱全
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
