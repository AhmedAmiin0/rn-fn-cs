import React from 'react'
import { Text, View } from 'react-native'
import { CardContainer, Subtitle, Title } from './style'

type Props = {
  title:string
  subtitle:string
  isPrimary?:boolean
}

export default function StatisticsCard({ 
  title,subtitle,isPrimary = false
}: Props) {
  return (
    <CardContainer isPrimary={isPrimary}>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </CardContainer>
  )
}