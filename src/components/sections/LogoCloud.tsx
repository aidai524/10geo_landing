import { motion } from "motion/react"
import { Building2, HeartPulse, GraduationCap, Landmark, Globe, Building } from "lucide-react"

export function LogoCloud() {
  return (
    <section className="py-24 border-y border-zinc-200/50 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-12 font-semibold">
          服务企业服务、医疗健康、教育培训、金融等行业客户
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 items-center justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2">
            <Building2 className="w-10 h-10 text-zinc-400" />
            <span className="text-xs text-zinc-400">企业服务</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HeartPulse className="w-10 h-10 text-zinc-400" />
            <span className="text-xs text-zinc-400">医疗健康</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GraduationCap className="w-10 h-10 text-zinc-400" />
            <span className="text-xs text-zinc-400">教育培训</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Landmark className="w-10 h-10 text-zinc-400" />
            <span className="text-xs text-zinc-400">金融行业</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Globe className="w-10 h-10 text-zinc-400" />
            <span className="text-xs text-zinc-400">出海品牌</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Building className="w-10 h-10 text-zinc-400" />
            <span className="text-xs text-zinc-400">高合规行业</span>
          </div>
        </div>
      </div>
    </section>
  )
}
