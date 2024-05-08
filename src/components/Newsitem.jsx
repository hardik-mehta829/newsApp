import React, { Component } from 'react';

const NewsItem = ({
  title,
  description,
  imageurl,
  newsurl,
  author,
  date,
  source,
}) => {
  return (
    <div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg relative  w-[324px] h-[492px]'>
        {source && (
          <span className='absolute top-0 right-0 inline-block px-3 py-1 text-xs font-semibold tracking-widest text-white bg-red-500 rounded-bl'>
            {source}
          </span>
        )}
        <img
          src={imageurl ? imageurl : '../../news.jpg'}
          className='w-full h-[40%]'
          alt='News'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{title}</div>
          <p className='text-gray-700 text-base'>{description}</p>
        </div>
        <div className='px-6 py-4'>
          <p className='text-gray-700 text-sm'>
            By {author ? author : 'Unknown'} updated at
            {new Date(date).getDate()} - {new Date(date).getMonth() + 1} -
            {new Date(date).getFullYear()}
          </p>
          {newsurl && (
            <button className='mt-10  bg-blue-500  text-white font-bold py-2 px-4 rounded absolute bottom-5'>
              <a
                href={newsurl}
                target='_blank'
                rel='noopener noreferrer'
                className=''
              >
                Read More
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
