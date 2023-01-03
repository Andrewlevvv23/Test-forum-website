import React, { useState, useEffect, Children, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './carousel.css';

const PAGE_WIDTH = 226;

export const Carousel = ( { children } ) => {
	const [ photo, setPhoto ] = useState([]);
	const [ offset, setOffset ] = useState(0);

	const handleLeftArrowClick = () => {
	  setOffset((currentOffset) => {
		const newOffset = currentOffset + PAGE_WIDTH
		return Math.min( newOffset, 0 ) })
	}
	const handleRightArrowClick = () => {
	  setOffset((currentOffset) => {
		const newOffset = currentOffset - PAGE_WIDTH;
		const maxOffset =  -(PAGE_WIDTH * (photo.length - 3));
		return Math.max( newOffset, maxOffset ) })
	}

	useEffect(() => {
		setPhoto(
			Children.map(children, child => {
				return cloneElement (child, {
					style: {
						minWidth: '100%',
						maxWidth: '100%',
						height: '100%',
					}
				})
			})
		)
	}, [ children ]);
  return (
	<div className="main_container">
		<FaChevronLeft className='arrow' onClick = { handleLeftArrowClick } />
		<div className='window'>
			<div className="all_pages_container"  style = {{transform: `translateX(${offset}px)`}}>{photo}</div>
		</div>
		<FaChevronRight className='arrow' onClick = { handleRightArrowClick } />
	</div>
  )
}

