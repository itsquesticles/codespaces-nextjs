import Card from './Card'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="group shadow-soft hover:border-clay/20">
      <p className="text-lg leading-8 text-white/80">“{quote}”</p>
      <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/50">
        <p className="font-semibold text-white">{author}</p>
        <p>{role}</p>
      </div>
    </Card>
  )
}
