import React from 'react';
import { useNavigate } from 'react-router-dom';
import './postItem.css';

const PostItem = ({icon, stars}) => {
  const router = useNavigate ();
  return (
	<div className='container' onClick={() => router(`/info`)}>
    <div>
      <div className='images'> {icon} </div>
    </div>

    <div className='content'> 
      <h1 className='title'>Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d)    für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d) </h1>
      <p className='descr'> Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH </p>
      <div className='location'>
        <img src="/images/Location.png" alt="none_photo" />
        <p> Vienna, Austria  </p>
      </div>
    </div>

    <div> 
      <div className='stars'> {stars} </div>
    </div>

    <div className='descr'>
      <div className='bookmark'> <img src="/images/Bookmark.png" alt="none_photo" /> </div>
      <p> Posted 2 days ago </p>
    </div> 
  </div>
  )
}
export default PostItem;