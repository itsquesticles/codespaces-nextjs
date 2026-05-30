import Card from './Card'

interface MediaCardProps {
  title: string
  description: string
  caption: string
}

export default function MediaCard({ title, description, caption }: MediaCardProps) {
  return (
    <Card className="group overflow-hidden hover:border-clay/20">
      <div className="mb-8 h-52 rounded-[1.5rem] bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]" />
      <h3 className="text-2xl font-semibold leading-tight text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/70">{description}</p>
      <p className="mt-6 text-xs uppercase tracking-[0.28em] text-white/40">{caption}</p>
    </Card>
  )
}
