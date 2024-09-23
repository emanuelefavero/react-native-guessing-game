import ScrollCard from '@/components/ScrollCard'
import PreviousGuessesTitle from '@/components/PreviousGuessesTitle'
import PreviousGuessesList from '@/components/PreviousGuessesList'

export default function PreviousGuesses() {
  return (
    <ScrollCard>
      <PreviousGuessesTitle />
      <PreviousGuessesList />
    </ScrollCard>
  )
}
