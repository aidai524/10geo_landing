import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Badge } from "@/src/components/ui/badge"

const data = [
  { platform: "ChatGPT", coverage: 92, mentions: "8,542", trend: "+18%", seen: "1h 前", positive: true },
  { platform: "Claude", coverage: 78, mentions: "3,210", trend: "+12%", seen: "3h 前", positive: true },
  { platform: "Gemini", coverage: 85, mentions: "4,890", trend: "+8%", seen: "5h 前", positive: true },
  { platform: "Perplexity", coverage: 68, mentions: "2,340", trend: "-2%", seen: "1d 前", positive: false },
  { platform: "文心一言", coverage: 72, mentions: "1,890", trend: "+5%", seen: "2d 前", positive: true },
]

export function HeroMockup() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <div className="absolute inset-0 blur-[120px] bg-orange-500/10 rounded-full -z-10 transform translate-y-1/4 scale-150" />
      
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Card className="w-full overflow-hidden border-zinc-200/50 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-2xl">
          <CardHeader className="border-b border-zinc-200/50 dark:border-white/5 pb-4">
            <CardTitle className="text-xl font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
              AI 平台可见度概览
              <Badge variant="secondary" className="ml-2 font-mono text-xs">实时监控</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-zinc-200/50 dark:border-white/5">
                  <TableHead className="w-[120px]">AI 平台</TableHead>
                  <TableHead>覆盖度</TableHead>
                  <TableHead className="text-right">提及次数</TableHead>
                  <TableHead className="text-right">变化趋势</TableHead>
                  <TableHead className="text-right">最近更新</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, i) => (
                  <TableRow key={i} className="border-zinc-200/50 dark:border-white/5">
                    <TableCell className="font-medium text-zinc-900 dark:text-zinc-300">{row.platform}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5 max-w-[80px]">
                          <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: `${row.coverage}%` }} />
                        </div>
                        <span className="text-xs text-zinc-500 font-mono">{row.coverage}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono text-zinc-700 dark:text-zinc-300">{row.mentions}</TableCell>
                    <TableCell className={`text-right font-mono ${row.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                      {row.trend}
                    </TableCell>
                    <TableCell className="text-right text-zinc-500 dark:text-zinc-500">{row.seen}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
