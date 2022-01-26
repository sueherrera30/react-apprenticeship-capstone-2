import React, { useState } from 'react';

import useFetch from '../../utils/hooks/usefetch';
import DatePicker from '../../components/Datepicker/DatePicker'
import NasaContent from '../../components/NasaContent/NasaContent';
import Characters from '../../components/Characters/Characters';
import { MainContainer, Description, Title, ContentContainer, StarContainer, Loading } from './home.styles';

const Home = () => {
    const [date, setDate] = useState(' ');
    const key = process.env.REACT_APP_API_KEY
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`
    const response = useFetch(url);
    const { data, error, loading } = response;
    const handleDate = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    };
    if (error) return <div>error</div>
    if (loading) return <Loading>Loading...</Loading>
    if (!response.data) return <div>Not data yet</div>;

    const { url: urlContent, explanation, media_type, title, date: dateResponse } = data;
  return (
      <>
        <MainContainer>
            <Title>may the universe be with you</Title>
            <ContentContainer>
                <Description>{explanation}</Description>
                <StarContainer>
                    <DatePicker date={date} handleDate={handleDate}/>
                    {
                        date ?  <NasaContent type={media_type} url={urlContent} /> : null
                    }
                    <h1>{!title ? 'there is no foto for this day' : title }</h1>
                </StarContainer>
                <Characters date={dateResponse} />
            </ContentContainer>
        </MainContainer>
      </>
  );
}

export default Home;
