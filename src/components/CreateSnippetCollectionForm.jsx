import React, {useState} from 'react'
import Select from 'react-select'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'


function CreateSnippetCollectionForm() {
    const [code, setCode] = useState('')
    const [languageValue, setLanguageValue] = useState('')
    const [createSnippetTitle, setCreateSnippetTitle] = useState('')
    const [showPreview, setShowPreview] = useState(false)
    const [newCollectionTitle, setNewCollectionTitle] = useState('')
    const [newCollectionDisplay, setNewCollectionDisplay] = useState(false)
    const [existingCollectionDisplay, setExistingCollectionDisplay] = useState(false)

    const handleLanguageValue = (e) => {
      setLanguageValue(e.target.value)
    }
    
    const handleNewCollectionTitle = (e) => {
        setNewCollectionTitle(e.target.value)
    }
  
    const handleCreateSnippetTitle = (e) => {
      setCreateSnippetTitle(e.target.value)
    }

    const handleNewCollection = () => {
      if (newCollectionDisplay === true) {
        setNewCollectionDisplay(false)
      } else {
        setExistingCollectionDisplay(false)  
        setNewCollectionDisplay(true)
      }
      
    }

    const handleExistingCollection = () => {
      if (existingCollectionDisplay === true) {
        setExistingCollectionDisplay(false)
      } else {
        setNewCollectionDisplay(false)
        setExistingCollectionDisplay(true)  
      }
    }

    const options = [
        {value:'javascript', label:'javascript'},
        {value:'css', label: 'css'},
        {value:'php', label: 'php'},
        {value:'java', label: 'java'},
        {value:'C', label: 'C'},
        {value:'html', label: 'html'},
        {value:'jsx', label: 'jsx'},
        {value:'C+', label: 'C+'},
        {value:'C++', label: 'C++'},
        {value:'C#', label: 'C#'},
        {value:'Ruby', label: 'ruby'},
        {value:'python', label: 'python'},
        {value:'Rust', label: 'rust'},
        {value:'go', label: 'go'},
        {value:'R', label: 'R'},
        {value:'Swift', label: 'Swift'},
        {value:'Lua', label: 'Lua'},
        {value:'Groovy', label: 'Groovy'},
        {value:'Matlab', label:'Matlab'},
        {value:'Scala', label:'Scala'},
        {value:'Perl', label: 'Perl'}
      ]

      const collectionOptions = [
        {value: 'test', label:'test'}
      ]

      const previewSnippet = () => {
        if (createSnippetTitle.length > 0) {
          console.log(createSnippetTitle)
            if (languageValue.value.length > 0) {
              console.log(languageValue.value)  
              if (code.length > 0) {
                   setShowPreview(true)
                } else{
                  return (
                    <h1>Please enter a code snippet</h1>
                  )
                }
            } else {
              return (
                <h1>Please select a language</h1>
              )
            }
        } else {
          return (
            <h1>Please enter a title</h1>
          )
        }
    
      }

      const addSnippet = () => {

        try {
          fetch(`http://localhost:8080/snippets/create`, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_id: 2, 
              title: 'test', 
              created_at: '2022-07-12', 
              language: 'js', 
              code_snippet: '<h1>Hello</h1>'
              })  
          }).then(res => console.log(res));
          
          }   catch(err) {
      
              console.log(err);
          
          }
    
      }
  return (
    <>

        <div className='create-collection-form-wrap'>
        <form className='create-snippet-form-collection'>
                <div className='collection-type-wrap'>
                    <div className='collection-type-dropdown'>
                      <h4 onClick={handleNewCollection} className='collection-type-label'>Add to new collection</h4>
                      <FontAwesomeIcon onClick={handleNewCollection} className='collection-type-chevronright' icon={newCollectionDisplay ? faChevronDown : faChevronRight} />
                    </div>
                    {
                    newCollectionDisplay?
                      <div className='create-new-collection-wrap'>
                          <input type='text' className='create-new-collection-title' value={newCollectionTitle} onChange={handleNewCollectionTitle} placeholder='Collection title'/>
                          <textarea type='text' className='create-new-collection-description' placeholder='Collection description'></textarea>
                      </div>
                      : 
                      null
                    }

                    <div className='collection-type-dropdown'>
                      <h4 className='collection-type-label' onClick={handleExistingCollection}>Add to existing collection</h4>
                      <FontAwesomeIcon onClick={handleExistingCollection} className='collection-type-chevronright' icon={existingCollectionDisplay ? faChevronDown : faChevronRight} />
                    </div>
                    {
                    existingCollectionDisplay ? 
                      <Select className='create-snippet-language-select' classNamePrefix='react-select'  placeholder={'Search your collections...'} options={collectionOptions} onChange={(choice) => setLanguageValue(choice)} value={languageValue}/>
                      :
                      null 
                    }
                </div>
                
                <div className="create-snippet-title-wrap">
                      <input type='text' id='titleInput' value={createSnippetTitle} onChange={handleCreateSnippetTitle} placeholder='Snippet title...' className='create-snippet-title-input'></input>
                </div>
                <Select className='create-snippet-language-select' classNamePrefix='react-select'  placeholder={'Choose a language'} options={options} onChange={(choice) => setLanguageValue(choice)} value={languageValue}/>
                    {
                    languageValue.value === undefined || createSnippetTitle.length < 1 ?
                        <CodeEditor
                          value={code}
                          language={languageValue.value}
                          placeholder={languageValue.length < 1 ? `Please select a language.` : `${languageValue.value} code editor`}
                          onChange={(e) => setCode(e.target.value)}
                          padding={15}
                          minHeight={160}
                          disabled={true}
                          className='code-editor'
                        />
                      :
                        <CodeEditor
                          value={code}
                          language={languageValue.value}
                          placeholder={languageValue.length < 1 || createSnippetTitle.length < 1 ? `Please select a language.` : `Start writing ${languageValue.value}!`}
                          onChange={(e) => setCode(e.target.value)}
                          minHeight={160}
                          padding={15}
                          className='code-editor'
                        />
                    }          
        </form>
                {
                showPreview ? 
                  <div className="code-snippet-preview">
                        <h1 className="code-snippet-preview-title">{createSnippetTitle}</h1>
                        <h4 className="code-snippet-preview-language">{languageValue.value}</h4>
                        <p className="code-snippet-preview-code">{code}</p>
                  </div>
                  :
                  null
                }
            <div className='create-form-privacy-wrap'>
                <label htmlFor='publicCheckbox' className='public-checkbox-label' value='public'>Public</label>
                <input id='publicCheckbox' className='public-checkbox' type='checkbox' />
                <label htmlFor='privateCheckbox' className="private-checkbox-label" value='private'>Private</label>
                <input id='privateCheckbox' className='private-checkbox' type='checkbox' />
            </div>
            <div className='create-form-buttons-wrap'>
              <button type='submit'onClick={addSnippet} className='create-snippet-button'>Create Snippet</button>    
            </div>
        </div>
    </>
  )
}

export default CreateSnippetCollectionForm