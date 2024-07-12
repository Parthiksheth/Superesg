import React from 'react'
import './home.scss'
import Herobanner from './herobanner'
import Card from './card'
import Featured from './featured'
import Strategy from './strategy'
import Haircut from './haircut'
import Hairstyle from './hairstyle'
import News from './news'

export default function Home() {
  return (
    <div>
      <Herobanner />
      <Card />
      <Featured />
      <Strategy />
      <Haircut />
      <Hairstyle />
      <News />
    </div>
  )
}
