import { motion } from "motion/react"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { Galaxy } from "@/src/components/backgrounds/Galaxy"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Galaxy
        hueShift={200}
        starSpeed={0.5}
        density={0.8}
        glowIntensity={0.4}
        twinkleIntensity={0.4}
        rotationSpeed={0.03}
        mouseRepulsion={true}
        transparent={true}
      />
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/50 dark:bg-white/5 px-3 py-1 text-sm text-zinc-600 dark:text-zinc-300 mb-8 backdrop-blur-sm"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-orange-500" />
          AI 全域增长科技公司 <ArrowRight className="w-4 h-4" />
        </span>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 max-w-4xl"
      >
        帮助品牌管理 AI 认知，让 AI 推荐成为增长引擎
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed"
      >
        十橙通过自研 <span className="font-semibold text-zinc-900 dark:text-white">10X AI</span> 增长引擎与 GEO 方法论，帮助企业在 AI 搜索、智能问答与推荐场景中建立权威信源，提升 AI 可见度、推荐占位与高质量转化。
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-8"
      >
        <Button size="lg" className="w-full sm:w-auto text-base">获取品牌 AI 可见度快检</Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">预约顾问咨询</Button>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400"
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          白帽策略
        </span>
        <span>可量化增长</span>
        <span>品牌数字资产归属</span>
      </motion.div>
      </div>
    </section>
  )
}
