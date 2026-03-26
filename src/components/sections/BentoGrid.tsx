import { motion } from "motion/react"
import { Card, CardTitle } from "@/src/components/ui/card"
import { CheckCircle2, Globe, TrendingUp, Shield } from "lucide-react"

const values = [
  {
    icon: CheckCircle2,
    title: "事实校准，确立权威",
    description: "适用于品牌参数、资质、认证、功能、价格等关键信息容易被 AI 误引或混淆的场景。清洗冲突信源，建立权威认知。",
    color: "indigo"
  },
  {
    icon: Globe,
    title: "全场景覆盖，放大全域 ROI",
    description: "适用于跨区域、跨人群、跨业务线的多场景推荐占位，帮助品牌在 AI 时代建立全域可见度优势。",
    color: "violet"
  },
  {
    icon: TrendingUp,
    title: "提升获客数量、效率与质量",
    description: "适用于高意向线索获取、长尾需求拦截、决策路径压缩等增长需求，将 AI 可见度转化为高质量转化。",
    color: "emerald"
  },
  {
    icon: Shield,
    title: "构建口碑防御与心智占位",
    description: "适用于品牌舆情修正、负面认知稀释、行业心智争夺等场景，帮助品牌建立可持续的数字心智资产。",
    color: "amber"
  },
]

export function BentoGrid() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
          一套面向 AI 时代的品牌认知增长方案
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          十橙不是只做内容分发，而是通过 10X AI 与全链路 GEO 交付体系，帮助品牌建立 AI 时代的数字心智。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((value, i) => {
          const Icon = value.icon
          const colorClasses = {
            indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
            violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
            emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
            amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
          }[value.color]
          
          return (
            <motion.div
              key={i}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-white/40 dark:bg-zinc-900/40 border-zinc-200/50 dark:border-white/5 p-8 flex flex-col justify-between">
                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-xl ${colorClasses} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl text-zinc-900 dark:text-white mb-2">{value.title}</CardTitle>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
