import Button from './Button'
import Card from './Card'

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
}

export default function PricingCard({ title, price, description, features }: PricingCardProps) {
  return (
    <Card variant="elevated" className="">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.35em] text-white/50">{title}</p>
        <p className="text-5xl font-semibold tracking-tight text-white">{price}</p>
        <p className="max-w-xl text-sm leading-7 text-white/70">{description}</p>
      </div>
      <ul className="mt-8 space-y-4 text-sm text-white/70">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-clay" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Button className="w-full">Join Office Hours</Button>
      </div>
    </Card>
  )
}
