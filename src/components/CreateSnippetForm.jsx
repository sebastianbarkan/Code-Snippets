import React, {useState} from 'react'
import Select from 'react-select'
import CodeEditor from '@uiw/react-textarea-code-editor';
function CreateSnippetForm({selected}) {
    const [code, setCode] = useState('')
    const [languageValue, setLanguageValue] = useState('')
    const [createSnippetTitle, setCreateSnippetTitle] = useState('')
    const [showPreview, setShowPreview] = useState(false)
  
    const handleLanguageValue = (e) => {
      setLanguageValue(e.target.value)
    } 
  
    const handleCreateSnippetTitle = (e) => {
      setCreateSnippetTitle(e.target.value)
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
        <div className='create-snippet-form-wrap'>
         <form className='create-snippet-form'>
                  <div className="create-snippet-title-wrap">
                      <input type='text' id='titleInput' value={createSnippetTitle} onChange={handleCreateSnippetTitle} placeholder='Enter a title...' className='create-snippet-title-input'></input>
                  </div>
                  <Select className='create-snippet-language-select' classNamePrefix='react-select'  placeholder={'Choose a language'} options={options} onChange={(choice) => setLanguageValue(choice)} value={languageValue}/>
                    {
                      languageValue.value === undefined ?
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
                          placeholder={languageValue.length < 1 ? `Please select a language.` : `Start writing ${languageValue.value}!`}
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

export default CreateSnippetForm