export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">关于我们</h1>
            <p className="text-xl text-gray-600">
              用科技创新驱动商业数字化转型
            </p>
          </div>
        </div>
      </section>

      {/* 公司介绍 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed mb-8">
                北京萤火智创科技有限公司成立于2023年，是一家专注于小程序开发和商业数字化解决方案的科技公司。我们致力于为商家提供智能化、便捷化的经营管理工具，帮助传统企业实现数字化转型。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">我们的使命</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                让每一个商家都能轻松驾驭数字化工具，实现业务增长。我们相信，科技创新能够为传统商业带来新的活力和机遇。
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">核心产品</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">萤火卡包会员管理小程序</h3>
                  <p className="text-gray-600">
                    为商家提供会员管理、营销推广、数据分析等一体化解决方案，助力商家提升运营效率和客户满意度。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">沃物精选返利小程序</h3>
                  <p className="text-gray-600">
                    创新的商业模式，帮助商家建立忠实客户群，提升复购率，实现可持续增长。
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">我们的优势</h2>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>专业的技术团队，确保产品稳定性和安全性</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>深入理解商家需求，提供定制化解决方案</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>持续的产品创新和技术升级</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>完善的售后服务体系</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">愿景展望</h2>
              <p className="text-gray-600 leading-relaxed">
                我们期待与更多商家携手合作，共同探索数字化转型之路。通过持续创新和优质服务，成为商业数字化解决方案的领先品牌。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}