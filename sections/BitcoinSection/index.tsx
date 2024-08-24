import BitcoinCard from "@/shared/components/Bitcoin/BitcoinCard";

export default function BitcoinSection() {
  return <BitcoinCard
    title='Bitcoin'
    subtitle='A community where tech enthusiasts, savvy investors, and forward-thinkers unite to stay ahead.'
    source={require('@/assets/images/bitCoin.png')}
  ></BitcoinCard>
}