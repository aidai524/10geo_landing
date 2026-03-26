import { motion } from "motion/react"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { BarChart3, Zap } from "lucide-react"

const data = [
  { question: "什么是 GEO？", visibility: 92, platform: "ChatGPT", trend: "+15%" },
  { question: "AI 搜索优化方法", visibility: 78, platform: "Claude", trend: "+8%" },
  { question: "品牌 AI 可见度提升", visibility: 85, platform: "Gemini", trend: "+12%" },
  { question: "AI 推荐占位策略", visibility: 64, platform: "Perplexity", trend: "+5%" },
]

export function FeaturePrompts() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -40, opacity: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 blur-[100px] bg-violet-500/10 rounded-full -z-10" />
          
          <Card className="p-6 bg-white/80 dark:bg-zinc-950/80 border-zinc-200/50 dark:border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">关键问题可见度监控</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span className="text-xs text-zinc-500 uppercase tracking-wider">实时</span>
              </div>
            </div>
            
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-zinc-200/50 dark:border-white/5">
                    <TableHead className="w-[200px]">核心问题</TableHead>
                    <TableHead>可见度</TableHead>
                    <TableHead>平台</TableHead>
                    <TableHead className="text-right">趋势</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row, i) => (
                    <TableRow key={i} className="border-zinc-200/50 dark:border-white/5">
                      <TableCell className="font-medium text-zinc-900 dark:text-zinc-300 truncate max-w-[200px]">{row.question}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5 max-w-[80px]">
                            <div className="bg-violet-500 dark:bg-violet-400 h-1.5 rounded-full" style={{ width: `${row.visibility}%` }} />
                          </div>
                          <span className="text-xs text-zinc-500 font-mono">{row.visibility}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-zinc-600 dark:text-zinc-400">{row.platform}</TableCell>
                      <TableCell className="text-right font-mono text-emerald-600 dark:text-emerald-400">{row.trend}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </motion.div>

        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 40, opacity: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">效果监控智能体</h3>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            围绕 AI 答案占有率、品牌认知健康度、竞争优势与转化路径贡献等指标，建立持续监测与复盘机制，确保优化策略的有效性。
          </p>
          <Button size="lg" variant="outline" className="rounded-full">
            了解监控系统
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
