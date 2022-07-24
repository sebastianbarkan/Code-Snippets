import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'

function SearchSnippets() {


  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }


  return (
        <>                
          <div className='content-container'>
                  <Sidebar></Sidebar>
                  <div className='search-snippet-wrap'>
                      <h1 className='search-snippet-heading'>Search for a Snippet</h1>
                      <input type='text' className='search-snippet-input'></input>
                      <div className='search-snippets-results-wrap'>

                      </div>
                  </div>
          </div>              
        </>
  )
}

export default SearchSnippets