import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from '../../Context'
import './SubHeader.css'
const SubHeader = () => {
    const [makeupSubheaderDropdown, showMakeupSubheaderDropdown] = useState(false)
    const [bodyCareSubheaderDropdown, showBodyCareSubheaderDropdown] = useState(false)
    const [skinCareSubheaderDropdown, showSkinCareSubheaderDropdown] = useState(false)
    const [hairCareSubheaderDropdown, showHairCareSubheaderDropdown] = useState(false)
    const [menstrualHygieneSubheaderDropdown, showMenstrualHygieneSubheaderDropdown] = useState(false)
    const { state, dispatch } = useContext(StateContext)
    return (
        <>
            <div className='subheader-container'>
                <div className='subheader-section' onMouseLeave={(e) => showMakeupSubheaderDropdown(!makeupSubheaderDropdown)}>
                    <h5 className='subheader-title' onMouseOver={(e) => showMakeupSubheaderDropdown(!makeupSubheaderDropdown)} >Makeup</h5>
                    <div className='subheader-dropdown-makeup' style={{ display: `${makeupSubheaderDropdown ? 'flex' : 'none'}` }} >
                        <Link className="links" to="/productlistingpage"><p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "Lipstick" })}>Lipstick</p></Link>
                        <Link className="links" to="/productlistingpage"><p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "Foundation" })}>Foundation</p></Link>
                        <Link className="links" to="/productlistingpage"><p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "Eyeshadow" })}>Eyeshadow</p></Link>
                        <Link className="links" to="/productlistingpage"><p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "Mascara" })}>Mascara</p></Link>
                    </div>
                </div>
                <div className='subheader-section' onMouseLeave={(e) => showBodyCareSubheaderDropdown(!bodyCareSubheaderDropdown)}>
                    <h5 className='subheader-title' onMouseOver={(e) => showBodyCareSubheaderDropdown(!bodyCareSubheaderDropdown)}>Body care</h5>
                    <div className='subheader-dropdown-skincare' style={{ display: `${bodyCareSubheaderDropdown ? 'flex' : 'none'}` }} >
                        <Link className="links" to="/productlistingpage"> <p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "BodyLotions" })}>Body Lotions</p></Link>
                        <Link className="links" to="/productlistingpage"> <p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "BodyWash" })}>Body wash</p></Link>
                    </div>
                </div>
                <div className='subheader-section' onMouseLeave={(e) => showHairCareSubheaderDropdown(!hairCareSubheaderDropdown)}>
                    <h5 className='subheader-title' onMouseOver={(e) => showHairCareSubheaderDropdown(!hairCareSubheaderDropdown)} >Hair care</h5>
                    <div className='subheader-dropdown-haircare' style={{ display: `${hairCareSubheaderDropdown ? 'flex' : 'none'}` }} >
                        <Link className="links" to="/productlistingpage"> <p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "Shampoo" })}>Shampoos</p></Link>
                        <Link className="links" to="/productlistingpage"> <p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "HairOil" })}>Hair oils</p></Link>
                    </div>
                </div>
                <div className='subheader-section' onMouseLeave={(e) => showSkinCareSubheaderDropdown(!skinCareSubheaderDropdown)}>
                    <h5 className='subheader-title' onMouseOver={(e) => showSkinCareSubheaderDropdown(!skinCareSubheaderDropdown)}>Skin care</h5>
                    <div className='subheader-dropdown-skincare' style={{ display: `${skinCareSubheaderDropdown ? 'flex' : 'none'}` }} >
                        <Link className="links" to="/productlistingpage"> <p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "FaceWash" })}>face Wash</p></Link>
                        <Link className="links" to="/productlistingpage"> <p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "Sunscreen" })}>Sun Screen</p></Link>
                        <Link className="links" to="/productlistingpage"> <p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "Moisturizer" })}>Moisturizers</p></Link>
                        <Link className="links" to="/productlistingpage"> <p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "FaceCream" })}>Day Creams</p></Link>
                    </div>
                </div>
                <div className='subheader-section' onMouseLeave={(e) => showMenstrualHygieneSubheaderDropdown(!menstrualHygieneSubheaderDropdown)}>
                    <h5 className='subheader-title' onMouseOver={(e) => showMenstrualHygieneSubheaderDropdown(!menstrualHygieneSubheaderDropdown)}>Menstrual Hygiene</h5>
                    <div className='subheader-dropdown-menstrual-hygiene' style={{ display: `${menstrualHygieneSubheaderDropdown ? 'flex' : 'none'}` }}  >
                        <Link className="links" to="/productlistingpage"> <p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "SanitaryPads" })}>Sanitary pads</p></Link>
                        <Link className="links" to="/productlistingpage"> <p className='subheader-items' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: "Tampoons" })}>Tampoons</p></Link>
                    </div>
                </div>
                <div className='subheader-section'>
                    <Link to="/productlistingpage" className='links'><h5 className='subheader-title' onClick={() => dispatch({ type: 'SET_SUB_CATEGORY', payload: null })}>All Products</h5></Link>
                </div>
            </div>
        </>
    )
}
export { SubHeader }