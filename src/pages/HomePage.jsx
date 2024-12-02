import React from 'react'
import Box from '../components/Box'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Temperature from '../components/Temperature'
import Humidity from '../components/Humidity'


export default function HomePage() {
	return (
		<>
			<div className='home-page-wrapper'>
			<Temperature/>
			<Box />
			<Humidity/>
			</div> 
			
		</>
	)
}
