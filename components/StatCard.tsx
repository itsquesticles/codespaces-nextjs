import Card from './Card'

interface StatCardProps {
  value: string
  label: string
  note?: string
}

export default function StatCard({ value, label, note }: StatCardProps) {
  return (
    <Card>
      <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{value}</p>
      <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">{label}</p>
      {note ? <p className="mt-4 text-sm leading-7 text-white/70">{note}</p> : null}
    </Card>
  )
}
