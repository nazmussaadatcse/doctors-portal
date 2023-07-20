import React from 'react';
import quote from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviewsData = [
        {
            _id: 1,
            name: 'Winson Henry',
            location:'Canada',
            img: people1,
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorem rem incidunt, id temporibus vel autem, unde quis aut molestias earum placeat ducimus sit expedita odit est consectetur fuga! Impedit.'
            
        },
        {
            _id: 2,
            name: 'Mr Jhon',
            location:'USA',
            img: people2,
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorem rem incidunt, id temporibus vel autem, unde quis aut molestias earum placeat ducimus sit expedita odit est consectetur fuga! Impedit.'
            
        },
        {
            _id: 3,
            name: 'Hardy Herry',
            location:'Canada',
            img: people3,
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorem rem incidunt, id temporibus vel autem, unde quis aut molestias earum placeat ducimus sit expedita odit est consectetur fuga! Impedit.'
            
        },
        
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between p-8'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Out Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48 ' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    reviewsData.map(review=> <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }

            </div>
        </section>
    );
};

export default Testimonial;