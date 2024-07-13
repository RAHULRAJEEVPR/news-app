import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import Card from "../components/card/Card";

const API_KEY = "pjcAWyAdnmYc1Le8js0Z6UyesqoPDX3x";
const POPULAR_URL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";

const url = `${POPULAR_URL}${API_KEY}`;

const Home = () => {
  const [newsData, setNewsData] = useState(null);
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${POPULAR_URL}+${API_KEY}`);
        const json = await res.json();
        setNewsData(json.results);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
   
    };
    getData();
  }, []);
  if(loading){
    return <Container>
      <h1>
        Data fetching...
      </h1>
    </Container>
  }
  return (
    <Container>
      {newsData && newsData?.map((news) => (<Card key={news.id} news={news} />))}
    </Container>
  );
};

export default Home;
