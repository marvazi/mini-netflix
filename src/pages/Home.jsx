import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <>
      <Main></Main>
      <Row rowId="1" title="UpComing" fetchURL={requests.requestUpcoming}></Row>
      <Row rowId="2" title="Popular" fetchURL={requests.requestPopular}></Row>
      <Row rowId="3" title="Trending" fetchURL={requests.requestTrending}></Row>
      <Row rowId="4" title="TopRated" fetchURL={requests.requestTopRated}></Row>
      <Row rowId="5" title="Horror" fetchURL={requests.requestHorror}></Row>
    </>
  );
};

export default Home;
