import StatisticsCard from "@/shared/components/cards/StatisticsCard";
import { View } from "react-native";

export default function StatisticsSection() {
  return <View style={{ flexDirection: 'row', gap: 8, marginBottom: 24 }}>
    <StatisticsCard isPrimary title='10k' subtitle='limited edition Contracts' />
    <StatisticsCard title='2,979' subtitle='owners' />
    <StatisticsCard title='7.5k' subtitle='sold' />
  </View>
}