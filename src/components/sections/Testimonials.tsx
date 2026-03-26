import { motion } from "motion/react"
import { Card } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { TrendingUp, CheckCircle2, Clock, BarChart3 } from "lucide-react"

const cases = [
  {
    industry: "企业服务",
    icon: BarChart3,
    problem: "目标客户决策理性且周期长，品牌在 AI 中缺少权威背书与优先推荐位",
    result: "品牌在核心问题中的出现频率显著提升，销售线索质量优于传统搜索渠道",
    metric: "AI 可见度提升 156%"
  },
  {
    industry: "医疗健康",
    icon: CheckCircle2,
    problem: "产品参数、价格区间与关键事实在 AI 回答中出现误引与混淆",
    result: "品牌关键参数类问题准确率显著提升，因错误信息带来的客服咨询显著下降",
    metric: "事实准确率提升 89%"
  },
  {
    industry: "教育培训",
    icon: Clock,
    problem: "AI 模型持续引用历史负面信息，导致现实改善无法及时进入用户认知",
    result: "历史负面标签被显著稀释，AI 回答从中性偏负转向基于新事实的积极评价",
    metric: "认知纠偏完成 6 项"
  },
  {
    industry: "出海品牌",
    icon: TrendingUp,
    problem: "传统投放边际收益下滑，品牌在 AI 决策问题中的可见度不足",
    result: "AI 可见度提升，自然流量占比增长，获客成本出现结构性优化",
    metric: "获客成本降低 32%"
  },
]

export function Testimonials() {
  return (
    <section className="py-32 border-y border-zinc-200/50 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
            从认知纠偏到线索增长，验证 AI 全域增长的真实结果
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            以下为匿名案例摘要，展示不同行业客户通过 GEO 获得的可量化价值。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={i}
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-white/40 dark:bg-zinc-900/40 border-zinc-200/50 dark:border-white/5 p-6 flex flex-col justify-between hover:bg-white/60 dark:hover:bg-zinc-900/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <Badge variant="secondary" className="text-xs">{c.industry}</Badge>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3 leading-relaxed">
                      <span className="font-medium text-zinc-600 dark:text-zinc-300">初始问题：</span>{c.problem}
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                      <span className="font-medium text-zinc-900 dark:text-white">结果：</span>{c.result}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-200/50 dark:border-white/5">
                    <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm font-medium">
                      {c.metric}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
