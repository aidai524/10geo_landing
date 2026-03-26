import { Button } from "@/src/components/ui/button"
import { MessageCircle, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="pt-32 pb-16 border-t border-zinc-200/50 dark:border-white/5 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-8">
            看看你的品牌，是否已经进入 AI 的推荐名单
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base">获取品牌 AI 可见度快检</Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">预约顾问咨询</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-t border-zinc-200/50 dark:border-white/5 pt-16">
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-6">产品</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">10X AI</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">功能特性</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">定价方案</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">更新日志</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-6">解决方案</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">企业服务</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">医疗健康</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">教育培训</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">出海品牌</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-6">资源</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">GEO 洞察</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">案例研究</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">常见问题</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">行业报告</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-6">公司</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">关于我们</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">联系我们</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">加入团队</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">合作伙伴</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-200/50 dark:border-white/5">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">十橙智能</span>
            <span className="text-zinc-500 text-sm ml-4">© 2026 南京十橙智能科技有限公司</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
