'use client'
// import { useState } from 'react'

export default function Contact() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     company: '',
    //     email: '',
    //     phone: '',
    //     message: ''
    // })

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     // 这里后续添加表单提交逻辑
    //     console.log(formData)
    // }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">联系我们</h1>
                        <p className="text-xl text-gray-600">
                            期待与您携手共创数字化未来
                        </p>
                    </div>
                </div>
            </section>

            {/* 联系方式和表单 */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* 联系信息 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">联系方式</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="text-blue-600 mr-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">公司地址</h3>
                                            <p className="text-gray-600">北京市</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-blue-600 mr-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">电子邮箱</h3>
                                            <p className="text-gray-600">contact@wowu365.cn</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-blue-600 mr-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">微信公众号</h3>
                                            <p className="text-gray-600">萤火智创科技</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">关于合作</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        我们期待与您建立长期稳定的合作关系。无论您是想了解产品详情，还是有定制化需求，都欢迎与我们联系。我们的专业团队将为您提供最适合的解决方案。
                                    </p>
                                </div>
                            </div>

                            {/* 联系表单 */}
                            {/* <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">在线咨询</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            姓名
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                            公司名称
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            电子邮箱
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            联系电话
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            咨询内容
                                        </label>
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        提交咨询
                                    </button>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}