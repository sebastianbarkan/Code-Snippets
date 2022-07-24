import React from 'react'
import Collections from './snippets/Collections'
import RecentSnippets from './snippets/RecentSnippets'
import SavedSnippets from './snippets/SavedSnippets'
import YourSnippets from './snippets/YourSnippets'

function HomeSnippets() {
  return (
    <>
        <div className='home-snippets-wrap'>
            <div className='home-snippets-section-wrap'>
                <h1 className='home-snippets-section-heading'>Recents</h1>
                <RecentSnippets></RecentSnippets>
            </div>
            <div className='home-snippets-section-wrap'>
                <h1 className='home-snippets-section-heading'>Saved</h1>
                <SavedSnippets></SavedSnippets>
            </div>
            <div className='home-snippets-section-wrap'>
                <h1 className='home-snippets-section-heading'>Collections</h1>
                <Collections></Collections>
            </div>
            <div className='home-snippets-section-wrap'>
                <h1 className='home-snippets-section-heading'>Your Snippets</h1>
                <YourSnippets></YourSnippets>
            </div>

        </div>    
    </>
  )
}

export default HomeSnippets