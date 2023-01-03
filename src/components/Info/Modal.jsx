import React from 'react';
//import { useNavigate } from 'react-router-dom';
import './Modal.css';

const ModalApply = ({setOpen}) => {
  return (
	
	 <div className='wrapper'>
		<div className='modal_page'>
			<img className='icon_close' src="/images/close.png" alt="none_photo" onClick={() => setOpen(false)} /> 
			<div className='message'> Leave your details and we will call you back </div>
			<form>
				<label>
					<input type="text" name="name" placeholder=' Your name...'/>
					<input type="number" name="phone" placeholder=' Your phone number...'/>
					<input type="text" name="email" placeholder=' Your email...'/>
				</label>
				<button className='btn_modal'> - Send us - </button>
			</form>
		</div>
		<div className='overlay' onClick={() => setOpen(false)}> </div>
	</div>
  )
}

export default ModalApply;



//const nav = useNavigate(); onClick={() => nav(`/info`)}