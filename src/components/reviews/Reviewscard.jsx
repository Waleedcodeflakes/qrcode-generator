import React, {useState} from 'react'
// import user from '../assets/images/user.png'
import stars5 from '../assets/images/stars-5.png'
import './reviews.css'


const Reviewscard = (props) => {
    const [likes, setLikes] = useState(8);
    const [isLiked, setIsLiked] = useState(false);
    const likeReview = () =>{
        if (!isLiked) {
            setLikes( prevLikes => prevLikes + 1 );
        }else{
            setLikes( prevLikes => prevLikes - 1 );
        }
        setIsLiked(!isLiked);
        
    }
  return (
    <div className='reviews-card'>
        <div className='user-info flex'>
            <div className='user-profile'>
                <i className="fa-solid fa-user"></i>
            </div>
            <div className='user-details'>
                <h3 className='fs-18'>{props.userName}</h3>
                {/* <p className='fs-14'>UX Researcher at a Mobile App Company</p> */}
                <p className='fs-14' style={{textAlign: 'left'}}>{props.userDetails}</p>
            </div>
        </div>
        <div className='ratings flex'>
            <div className='stars'><img src={stars5} alt='5 star'/> <span>5</span></div>
            <p>•</p>
            <p>{props.datePosted}</p>
        </div>
        <div className='review-content'>
            {/* <h3 className='fs-20'>Strumento impeccabile per campagne pubblicitarie</h3> */}
            <h3 className='fs-20'>{props.reviewTitle}</h3>
            {/* <p className='fs-16'>Utilizzo ME-QR da oltre un anno per le nostre campagne pubblicitarie e sono estremamente soddisfatto. Le statistiche dettagliate sui codici scansionati ci aiutano ad analizzare le performance. Inoltre, la personalizzazione grafica dei QR è molto utile per l’identità visiva.</p> */}
            <p className='fs-16'>{props.reviewDesc}</p>
        </div>
        <div className='review-likes'>
           <i onClick={likeReview} className={`fa-${isLiked ? 'solid' : 'regular'} fa-thumbs-up`}></i> <span>{likes}</span>
        </div>
    </div>
  )
}

export default Reviewscard