import React from 'react'
import './pagination.css';

const Pagination = ({pagStart, pagEnd, activePage, onChange}) => {
	const items = (new Array( pagEnd - pagStart )).fill(6, 0, 6).map((item, i) => {
		return (
			<button onClick={() => onChange(i)} className={activePage === i && 'active' } > 
				{i + 1} 
			</button>
		)
	}); 
  return (
	<div className='container__pagination'>
		<button className='Shape'> <img src="/images/Arrow_left.png" alt="None" onClick={() => onChange(activePage - 1)} /> </button>
		<div className='divider'></div>
		<div className='number'>
			{items}
		</div>
		<div className='divider'></div>
		<button className='Shape'> <img src="/images/Arrow_right.png" alt="None" onClick={() => onChange(activePage + 1)} disabled /> </button>
	</div>
  )
}

export default Pagination;
