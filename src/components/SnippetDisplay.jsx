import React from 'react'
import {FaStar, FaPencilAlt, FaTrash} from 'react-icons/fa'

function SnippetDisplay(props) {

  return (
    <>

        <section className='snippet-container'>
          <div className='snippet-header'>
              <h1 className='snippet-title'>{ props.snippetData[props.id]?.title}</h1>
              <div className='snippet-header-links'>
                <FaStar className='snippet-header-star'/>
                <h3 className='snippet-header-save'>Save</h3>
                <FaPencilAlt className='snippet-header-pencil'/>
                <h3 className='snippet-header-edit'>Edit</h3>
                <FaTrash className='snippet-header-trash'/>
                <h3 className='snippet-header-delete'>Delete</h3>
              </div>
          </div>
          <div className='snippet-subcontent'>
              <p className='snippet-subcontent-updated'>Last updated 12/23/2021</p>
              <p className='snippet-subcontent-author'>@nero1333</p>
              <div className='snippet-language-wrap'>
                  <p className='snippet-language'>React</p>
                  <p className='snippet-language'>JS</p>
              </div>
          </div>
          <div className='snippet-maincontent'>
            <p className='snippet-description'>{props.snippetData[props.id]?.description}</p>
          </div>
        </section>
      

    </>
  )
}

export default SnippetDisplay