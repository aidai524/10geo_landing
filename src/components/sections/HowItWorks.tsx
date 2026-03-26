import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { ArrowRightLeft, Brain, Target, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: ArrowRightLeft,
    title: "从争入口到争答案",
    description: "流量竞争正在从传统搜索入口转向 AI 答案推荐，品牌需要在新的决策场景中建立可见度。",
    color: "indigo"
  },
  {
    icon: Brain,
    title: "AI 已成为决策第一轮筛选",
    description: "用户在购买决策前越来越多地向 AI 提问，不主动管理 AI 认知的品牌会在高意向决策前被排除。",
    color: "violet"
  },
  {
    icon: Target,
    title: "GEO 是 AI 推荐逻辑的适配",
    description: "GEO 不是 SEO 的简单升级，而是对 AI 推荐逻辑的重新理解和适配，建立权威信源与可持续增长优势。",
    color: "emerald"
  },
]

export function HowItWorks() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-orange-500 text-sm font-semibold mb-4"
        >
          <TrendingUp className="w-4 h-4" />
          市场趋势
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
          品牌竞争，正在从争入口转向争答案
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          在 AI 时代，被动等待被发现已经不够了。主动管理 AI 认知，才能在新的决策场景中获得增长确定性。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, i) => {
          const Icon = reason.icon
          const colorClasses = {
            indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
            violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
            emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
          }[reason.color]
          
          return (
            <motion.div
              key={i}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-white/40 dark:bg-zinc-900/40 border-zinc-200/50 dark:border-white/5 hover:bg-white/60 dark:hover:bg-zinc-900/60 transition-colors">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${colorClasses} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl text-zinc-900 dark:text-white">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
