import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'


function UserSnippetsSearch() {
    const [snippetData, setSnippetData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [snippetId, setSnippetId] =  useState(0)
    
    const api = axios.create({
      baseURL: 'http://localhost:5000/api/'
    })
    
    const [snippetType, setSnippetType] = useState(true)
    
    const handleSnippetType = () => {
      setSnippetType(!snippetType)
    }
    
    const handleSnippetId = (i) => {
      setSnippetId(i)
    }
    
    useEffect(() => {

      
    }, []) 
    
  return (
      <>
        <section className='usersnippet-container'>
            <input type='search' className='usersnippet-search' placeholder='Search your snippets...'/>
            <div className='usersnippet-type-wrap'>
            </div>
            <div className='usersnippet-display'>
                {loaded ? snippetData.map((e, i) => { return (
                <div className='usersnippet' onClick={() => handleSnippetId(i)} key={i} id={i}>
                  <h2 className='usersnippet-title'>{`${snippetData[i].title}`}</h2>
                  <div className='usersnippet-language-wrap'> 
                    <h3 className='usersnippet-language-item'>{`${snippetData[i].language}`}</h3>
                  </div>
                </div>
                  )}) 
                
                : 
                null}
            </div>
        </section>
      </>
  );
}

export default UserSnippetsSearch;
