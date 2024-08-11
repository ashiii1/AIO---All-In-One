import styled from 'styled-components'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import Items from '../components/Items'
import LowerAnnouncement from '../components/LowerAnnouncement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import UpperAnnouncement from '../components/UpperAnnouncement'

const Maincontainer=styled.div`
background-color:whitesmoke;
`

export default function Home() {
    return (
        <div>
          <Maincontainer>
          <UpperAnnouncement/>
          <Navbar/>
          <LowerAnnouncement/>
          <br/>
          <Slider />
          <Brands/>
          <Items/>
          <Newsletter/>
          <Footer/>
          </Maincontainer>
        </div>
    )
}

