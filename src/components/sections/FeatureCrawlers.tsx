import { motion } from "motion/react"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import { Users, Lightbulb, Target } from "lucide-react"

const data = [
  { time: '1月', visibility: 35 },
  { time: '2月', visibility: 42 },
  { time: '3月', visibility: 58 },
  { time: '4月', visibility: 72 },
  { time: '5月', visibility: 85 },
  { time: '6月', visibility: 92 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 p-3 rounded-lg shadow-xl">
        <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-1">{label}</p>
        <p className="text-zinc-900 dark:text-white font-mono font-medium">
          {payload[0].value}% <span className="text-zinc-400 dark:text-zinc-500 text-xs font-sans">可见度</span>
        </p>
      </div>
    )
  }
  return null
}

export function FeatureCrawlers() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-orange-500 text-sm font-semibold mb-4"
        >
          <Lightbulb className="w-4 h-4" />
          核心产品
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
          10X AI，驱动 GEO 全链路优化闭环
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -40, opacity: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">用户洞察智能体</h3>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            还原用户真实的 AI 提问场景与决策路径，识别品牌在 AI 认知链路中的核心问题与增长机会。帮助品牌理解用户在 AI 场景中的真实需求。
          </p>
          <Button size="lg" variant="outline" className="rounded-full">
            了解 10X AI
          </Button>
        </motion.div>

        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 40, opacity: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="absolute inset-0 blur-[100px] bg-indigo-500/10 rounded-full -z-10" />
          
          <Card className="p-6 bg-white/80 dark:bg-zinc-950/80 border-zinc-200/50 dark:border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">品牌 AI 可见度趋势</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span className="text-xs text-zinc-500 uppercase tracking-wider">实时</span>
              </div>
            </div>
            
            <div className="h-[200px] w-full mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorVisibility" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(128,128,128,0.2)', strokeWidth: 1, strokeDasharray: '4 4' }} />
                  <Area 
                    type="monotone" 
                    dataKey="visibility" 
                    stroke="#818cf8" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorVisibility)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-4 border border-zinc-200/50 dark:border-white/5">
                <p className="text-xs text-zinc-500 mb-1">用户提问场景</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-mono text-zinc-900 dark:text-white">2,840</span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">+156</span>
                </div>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-4 border border-zinc-200/50 dark:border-white/5">
                <p className="text-xs text-zinc-500 mb-1">增长机会点</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-mono text-zinc-900 dark:text-white">48</span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">新增</span>
                </div>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-4 border border-zinc-200/50 dark:border-white/5">
                <p className="text-xs text-zinc-500 mb-1">认知偏差</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-mono text-zinc-900 dark:text-white">12</span>
                  <span className="text-xs font-mono text-rose-600 dark:text-rose-400">待修复</span>
                </div>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-4 border border-zinc-200/50 dark:border-white/5">
                <p className="text-xs text-zinc-500 mb-1">竞争位势</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-mono text-zinc-900 dark:text-white">TOP3</span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">↑2</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  )
}
