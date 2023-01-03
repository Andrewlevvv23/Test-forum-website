import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import './Modal.css';

const SharePage = ({setOpenShare}) => {
	const shareUrl = 'https://andrewlev.biz.ua/#portfolio';
  return (
	 <div className='wrapper'>
		<div className='modal_page'>
			<img className='icon_close' src="/images/close.png" alt="none_photo" onClick={() => setOpenShare(false)} />
			<div style={{ textAlign: 'center'}}> 
				<div className='message'> Share the page on social networks! </div>
					<FacebookShareButton url={shareUrl}>
						<FacebookIcon size={40} round={true} style={{ marginTop: '10px'}}/>
					</FacebookShareButton>
					<WhatsappShareButton url={shareUrl}>
						<WhatsappIcon size={40} round={true} style={{ marginTop: '10px'}}/>
					</WhatsappShareButton>
					<LinkedinShareButton url={shareUrl}>
						<LinkedinIcon size={40} round={true} style={{ marginTop: '10px'}}/>
					</LinkedinShareButton>
					<TelegramShareButton url={shareUrl}>
						<TelegramIcon size={40} round={true} style={{ marginTop: '10px'}}/>
					</TelegramShareButton>
				<div>
					<img className='happy_gif' src="/images/BsfE.gif" alt="none_photo" 
					style={{width:'270px', height:'150px', marginTop: '12px'}}/>
				</div>
			</div> 
		</div>
		<div className='overlay' onClick={() => setOpenShare(false)} > </div>
	</div>
  )
}

export default SharePage;