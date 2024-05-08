import React, { Component, useEffect, useState } from 'react';
import NewsItem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Alert from './Alert';
const temparticles = [];
const News = (props) => {
  const [articles, setArticles] = useState([]); //articles store the number of articles retrieved from news api
  const [asked, setAsked] = useState([]); //depending on the query of user to store the articles matching the query.
  const [page, setPage] = useState(1); //to store the page from news API.
  const [total, setTotal] = useState(0);
  const [Loading, setLoading] = useState(false);
  // document.title = `${this.props.category} - newsMonkey`;
  // update function runs on initial render.Initially no data has arrived so we set loading state to true. which fetches data from news API for the first time and depending on the progress of retrieval we also set the top loading bar . when the articles arrive we store them in articles variable. and the number of articles in total variable. after that we set loading state back to false.

  const updatefun = async () => {
    try {
      props.setProgress(0);
      //Runs after render function.
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pagesize}`;
      setLoading(true);
      props.setProgress(10);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      console.log(parsedData);
      setArticles(parsedData.articles);

      setTotal(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.log(error.message);
      props.seterror(error.message);
    }
  };
  useEffect(() => {
    //if query length less than 3 we do not run this callback
    if (props.query.length < 3) return;
    //filtering the articles based on their source name which matches the query
    const filteredResults = articles.filter((article) => {
      return article.source.name
        .toLowerCase()
        .includes(props.query.toLowerCase());
    });
    //storing the matched results
    setAsked(filteredResults);
  }, [props.query]);
  useEffect(() => {
    document.title = `${props.category}`;
    updatefun();
  }, []);

  const fetchData = async () => {
    // this.setState({ page: this.state.page + 1 });

    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.api}&page=${
      page + 1
    }&pageSize=${props.pagesize}`;
    setPage((page) => page + 1); //setPage is asyncronous function so it takes time to update the page so use it after url
    let data = await fetch(url);

    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <>
      <div className=''>
        <p className='text-center text-3xl' style={{ marginTop: '63px' }}>
          News Headlines
        </p>
        {Loading && (
          <div className='flex  justify-center'>
            <Spinner />
          </div>
        )}
        {props.query.length < 3 && (
          //infinite scroll component which runs when articles length is less than total results and it calls the fetchdata function which retrieves data from next page .
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={articles.length < total} // Replace with a condition based on your data source
            loader={<Spinner />}
          >
            <div className='grid grid-cols-4 gap-4 mt-5 w-[90%] ml-10'>
              {articles.map((e, num) => {
                return (
                  <div className='col-md-4' key={num}>
                    <NewsItem
                      title={e && e.title ? e.title.slice(0, 45) : ''}
                      description={
                        e && e.description ? e.description.slice(0, 88) : ''
                      }
                      imageurl={e && e.urlToImage}
                      newsurl={e && e.url}
                      author={e && e.author}
                      date={e && e.publishedAt}
                      source={e && e.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        )}
        {props.query.length >= 3 && !asked.length && (
          <Alert message='No result found' />
        )}
        {props.query.length >= 3 && asked.length && (
          <div className='grid grid-cols-4 gap-4 mt-5 w-[90%] ml-10'>
            {asked.map((e, num) => {
              return (
                <div className='col-md-4' key={num}>
                  <NewsItem
                    title={e && e.title ? e.title.slice(0, 45) : ''}
                    description={
                      e && e.description ? e.description.slice(0, 88) : ''
                    }
                    imageurl={e && e.urlToImage}
                    newsurl={e && e.url}
                    author={e && e.author}
                    date={e && e.publishedAt}
                    source={e && e.source.name}
                  />
                </div>
              );
            })}
            )
          </div>
        )}
      </div>
    </>
  );
};

export default News;
{
  /* <div className=''>
            <NewsItem
              title='NASA ALERT! Four Huge Asteroids Racing Towards Ear…At Alarming Speeds: Should You Worry? - Times Now'
              description='NASA alerts of four asteroids, one of which is a massive 171-foot space rock, approaching Earth today at alarming speeds.'
              imageurl='https://static.tnn.in/thumb/msid-109888756,thumbsize-1246085,width-1280,height-720,resizemode-75/109888756.jpg'
              newsurl='https://www.timesnownews.com/technology-science/nasa-alert-four-huge-asteroids-racing-towards-earth-at-alarming-speeds-should-you-worry-article-109888861'
              author='Shubham Arora'
              date='2024-05-06T15:33:20Z'
              source='NDTV News'
            />
          </div> */
}
