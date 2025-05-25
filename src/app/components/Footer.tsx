export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">萤火智创</h3>
            <p className="text-sm">专注于小程序开发的科技公司，为企业提供专业的技术解决方案。</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">产品服务</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">沃客卡包会员管理小程序</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">沃物精选小程序</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">关于我们</a></li>
              <li><a href="/products" className="hover:text-blue-400 transition-colors">产品服务</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">联系方式</h3>
            <ul className="space-y-2 text-sm">
              {/* <li>地址：北京市</li> */}
              {/* <li>电话：010-XXXXXXXX</li> */}
              <li>邮箱：contact@wowu365.cn</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} 北京萤火智创科技有限公司 版权所有</p>
          <p className="mt-2">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              {/* 京ICP备XXXXXXXX号-1 */}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}