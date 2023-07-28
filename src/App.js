
import Row from './Components/Row';
import requests from "./Components/requests"
import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';



 function App() {
  return (

    <div className='App'>

       <Nav/>  
      <Banner/>
       <Row  
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOrginals} 
      isLargeRow
      /> 
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated"fetchUrl={requests.fetchTopRatedMovies}/>
   <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/> 
     <Row title="Documentaries Movies"fetchUrl={requests.fetchDocumentariesMovies}/>
     <Row title="Mystery Movies" fetchUrl={requests.fetchMystery} />
      <Row title="SciFi Movies" fetchUrl={requests.fetchSciFi} />
      <Row title="Western Movies" fetchUrl={requests.fetchWestern} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
      <Row title="TV" fetchUrl={requests.fetchTV} />
    </div>  





   
  );
}

export default App;
