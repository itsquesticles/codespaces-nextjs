import Card from './Card'

interface TimelineCardProps {
  year: string
  title: string
  detail: string
}

export default function TimelineCard({ year, title, detail }: TimelineCardProps) {
  return (
    <Card className="group overflow-hidden hover:border-clay/20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">{year}</p>
      <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/70">{detail}</p>
    </Card>
  )
}
