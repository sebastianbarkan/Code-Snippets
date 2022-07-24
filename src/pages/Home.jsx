import React from 'react';
import Sidebar from '../components/Sidebar';
import UserSnippetsSearch from '../components/UserSnippetsSearch';
import HomeSnippets from '../components/HomeSnippets';
function Home() {


  return (
      <>
        
        <section className='content-container'>
            <Sidebar></Sidebar> 
            <UserSnippetsSearch></UserSnippetsSearch>
            <HomeSnippets></HomeSnippets>  
        </section>
          
      </>
  );
}

export default Home;
