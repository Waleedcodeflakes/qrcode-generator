import React from 'react'
import './reviews.css'
import Reviewscard from './Reviewscard'

const Reviews = () => {

  const reviewsData = [
    {
      userName: 'Ryan Mitchell',
      userDetails: 'UX Researcher at a Mobile App Company',
      datePosted: '2025-07-09',
      reviewTitle: 'Strumento impeccabile per campagne pubblicitarie',
      reviewDesc: 'Utilizzo ME-QR da oltre un anno per le nostre campagne pubblicitarie e sono estremamente soddisfatto. Le statistiche dettagliate sui codici scansionati ci aiutano ad analizzare le performance. Inoltre, la personalizzazione grafica dei QR è molto utile per l’identità visiva.',
      likes: 6,
    },
    {
      userName: 'Marco Bianchi',
      userDetails: 'Responsabile Marketing in unagenzia di comunicazione',
      datePosted: '',
      reviewTitle: 'Strumento impeccabile per campagne pubblicitarie',
      reviewDesc: 'Utilizzo ME-QR da oltre un anno per le. Le statistiche dettagliate sui codici scansionati ci aiutano ad analizzare le performance. Inoltre, la personalizzazione grafica dei QR è molto utile per l’identità visiva.',
    },
    {
      userName: 'Camille Dubois',
      userDetails: 'Chargée de communication dans une entreprise de mode à Paris',
      datePosted: '2025-06-25',
      reviewTitle: 'Excellent pour nos supports marketing',
      reviewDesc: 'I like the flexibility of ME-QR and the ability to update links after publishing. That said, the interface sometimes feels a bit cluttered on smaller screens.',
    },
    {
      userName: 'Ryan Mitchell',
      userDetails: 'UX Researcher at a Mobile App Company',
      datePosted: '2025-07-09',
      reviewTitle: 'Strumento impeccabile per campagne pubblicitarie',
      reviewDesc: 'Utilizzo ME-QR da oltre un anno per le nostre campagne pubblicitarie e sono estremamente soddisfatto. Le statistiche dettagliate sui codici scansionati ci aiutano ad analizzare le performance. Inoltre, la personalizzazione grafica dei QR è molto utile per l’identità visiva.',
    },
    {
      userName: 'Marco Bianchi',
      userDetails: 'Responsabile Marketing in unagenzia di comunicazione',
      datePosted: '',
      reviewTitle: 'Strumento impeccabile per campagne pubblicitarie',
      reviewDesc: "ME-QR gave us valuable insights during our latest product launch. We used QR codes in both digital and physical ads, and the analytics clearly showed where engagement was strongest. While the platform works well overall, I’d love to see more advanced segmentation options in the reporting. Still, it's a solid tool that’s improved our campaign tracking.",
    },
    {
      userName: 'Camille Dubois',
      userDetails: 'Chargée de communication dans une entreprise de mode à Paris',
      datePosted: '2025-06-25',
      reviewTitle: 'Excellent pour nos supports marketing',
      reviewDesc: 'ME-QR est devenu un outil indispensable pour nos campagnes print. Nous pouvons suivre les scans en temps réel et adapter nos contenus en fonction des résultats. L’interface est claire et les QR codes sont facilement personnalisables. Je le recommande vivement !',
    },

    // {
    //   userName: '',
    //   userDetails: '',
    //   datePosted: '',
    //   reviewTitle: '',
    //   reviewDesc: '',
    // },
    // {
    //   userName: '',
    //   userDetails: '',
    //   datePosted: '',
    //   reviewTitle: '',
    //   reviewDesc: '',
    // },
    // {
    //   userName: '',
    //   userDetails: '',
    //   datePosted: '',
    //   reviewTitle: '',
    //   reviewDesc: '',
    // },

  ]
  return (
    <div className='reviews w-100'>
        <div className='w-85 m-auto'>
            <h2 className='fw-700 fs-40'>ME-QR Reviews</h2>
            <p className='fw-400 fs-16'>Discover what our customers say about their encounters with our versatile and user-friendly platform.</p>

            <div className='reviews-card-container flex c-gap-1'>
                {/* <Reviewscard/> */}
                {reviewsData?.map((card, index) => (
                          <Reviewscard key={index} 
                          userName={card.userName} 
                          userDetails={card.userDetails} 
                          datePosted={card.datePosted} 
                          reviewTitle={card.reviewTitle} 
                          reviewDesc={card.reviewDesc} 
                          likes={card.likes}
                          />
                        ))}
            </div>
            <div className='show-all'>
                <button><a href='#usefulllink' className='fs-16 fw-700'>Show All</a></button>
            </div>
        </div>
    </div>
  )
}

export default Reviews