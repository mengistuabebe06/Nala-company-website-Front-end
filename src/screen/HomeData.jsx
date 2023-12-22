import React from 'react'
import Services from '../components/Services'
import Products from '../components/Products'
import Testemonial from '../components/Testemonial'
import LatestNews from '../components/LatestNews'

export default function HomeData() {
  return (
    <div>
          <Services />
          <Testemonial />
          <LatestNews/>
    </div>
  )
}
