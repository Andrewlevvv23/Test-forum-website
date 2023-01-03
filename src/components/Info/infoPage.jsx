import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from './carousel';
import './infoPage.css';
import MyComponentMaps from './Map';
import ModalApply from './Modal';
import SharePage from './sharePage';

const InfoPage = ( ) => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [openShare, setOpenShare] = useState(false);
	const [saveBook, setSaveBook] = useState(false);
  return (
  <div className='page'>
	<div className='container_info'>
		<section className='header_info'> 
			<h1 className='title_Info'> Job Details </h1>
			<div className='save' onClick={() => setSaveBook(true)}> 
			{saveBook && (<img className='icon' src="/images/bookmark_black.png" alt="no" style={{position:'absolute'}}/>)}
			    <img className='icon' src="/images/Bookmark.png" alt="none_photo" /> 
				<div> Save to my list</div>
			</div>	
			<div className='share' onClick={() => setOpenShare(true)} >
				<img className='icon' src="/images/Share.png" alt="none_photo" /> 
				<div> Share </div>
			</div>
			<div className="divider_info"> </div>
		</section>
		<button className='btnApply btnApply_media' onClick={() => setOpen(true)} > APPLY NOW  </button>
		<section className="hospital">
			<div className="hospital_info_blocks">
				<div className="hospital_block_left">
				<div className="hospital_name"> Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d) </div>
				<div className="hospital_post_date"> Posted 2 days ago </div>
				</div>	
				<div className="hospital_block_right">
					<div className="hospital_price"> € 54 000—60 000 </div>
					<div className="hospital_price_descr"> Brutto, per year </div>
				</div>
			</div>
			<p className="hospital_info_descr">
				At WellStar, we all share common goals. That’s what makes us so successful – and such an integral part of our communities. We want the same things, for our organization, for our patients, and for our colleagues. As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. We continue to provide innovative care models, focused on improving quality and access to healthcare.
			</p>
		</section>
		<section className="responsopilities">
			<div className='respons_title'> Responsopilities </div>
			<p className="response_descr">
				Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons. <br></br>
				The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation. <br></br>
				Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.
			</p>
		</section>
		<section className="benefits">
			<div className="benefits_title"> Compensation & Benefits: </div>
			<p className="benefits_descr"> Our physicians enjoy a wide range of benefits, including: </p>
			<ul className='benefits_services'>
				<li>Very competitive compensation package with bonuses</li>
				<li>Medical, Dental, and Vision Insurance</li>
				<li>Occurrence-based Malpractice Coverage</li>
				<li>Short-term and Long-term Disability Insurance and life insurance</li>
			</ul>
			<button className='btnApply' onClick={() => setOpen(true)} > APPLY NOW  </button>
		</section>
		<section className="additional">
			<div className="additional_title"> Additional info </div>
			<div className="divider_additional"> </div>
			<p className="employment_descr"> Employment type </p>
			<div className="additional_btn media_id1">
				<button className='btn_blue'> Full time </button>
				<button className='btn_blue'> Part time </button>
				<button className='btn_blue'> Temporary </button>
			</div>
			<p className="add_benefits_descr"> Benefits </p>
			<div className="additional_btn media_id2"> 
				<button className='btn_yellow'> Flexible shedule </button>
				<button className='btn_yellow'> Relocation assistance </button>
			</div>
		</section>
		<section className="attached">
			<div className="additional_title"> Attached images </div>
			<div className="divider_additional"> </div>
			<Carousel>
				<img className='image' src="/images/Bitmap.png" alt="none_photo" /> 
				<img className='image' src="/images/Bitmap2.png" alt="none_photo" /> 
				<img className='image' src="/images/Bitmap3.png" alt="none_photo" /> 
				<img className='image' src="/images/Bitmap.png" alt="none_photo" /> 
				<img className='image' src="/images/Bitmap2.png" alt="none_photo" /> 
				<img className='image' src="/images/Bitmap3.png" alt="none_photo" /> 
			</Carousel>
		</section> 
		<div className="btnExit">
			<button className='exit' onClick={() => navigate(`/`)}> RETURN TO JOB BOARD  </button>
			<img id='btnArrow' className='btnArrow' src="/images/Arrow.png" alt="none_photo"/>
		</div>
		<div className="cards">
			<div className="cards_title"> Contacts </div>
			<div className="divider_info divider_cards ">  </div>
			<div className="cards_info">
				<div className="cards_info_title"> Department name.<br/> University Hospital Giessen. </div>
				<div className="cards_info_local"> <img className='cards_location_icon' src="/images/Location.png" alt="none_photo" /> AKH Wien, 1090 Wien, Währinger </div>
				<div className="cards_info_descr"> Gürtel 18-20 </div>
				<div className="cards_info_contact"> +43 (01) 40400-12090,<br/>post_akh_diz@akhwien.at</div>
			</div>
			<div className="cards_map">
			    <MyComponentMaps />
			</div>
		</div>
		{  open && ( <ModalApply setOpen={setOpen} open={open} /> ) }
		{  openShare && ( <SharePage setOpenShare={setOpenShare} openShare={openShare} /> ) }
	</div>
</div>	
  )
}
export default InfoPage;

/*
<section className="attached">
	<div className="additional_title"> Attached images </div>
	<div className="divider_additional"> </div>
	<div className="attached_images">
		<img className='image' src="/images/Bitmap.png" alt="none_photo" /> 
		<img className='image' src="/images/Bitmap2.png" alt="none_photo" /> 
		<img className='image' src="/images/Bitmap3.png" alt="none_photo" /> 
	</div>
</section> 
*/