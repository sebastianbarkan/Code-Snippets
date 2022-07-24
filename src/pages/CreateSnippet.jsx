import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Select from 'react-select'
import CodeEditor from '@uiw/react-textarea-code-editor';
import CreateSnippetForm from "../components/CreateSnippetForm.jsx";
import CreateSnippetCollectionForm from "../components/CreateSnippetCollectionForm.jsx";

function CreateSnippet() {
  const [showPreview, setShowPreview] = useState(false)
  const [createTypeSnippet, setCreateTypeSnippet] = useState(true)
 

  

  

 

  return (
    <>
      <section className="content-container">
        <Sidebar />
        <div className="create-snippet-content-wrap">
          <div className="create-snippet-content">
            <h1 className="create-snippet-heading">Create A Snippet</h1>
            <div className="create-snippet-type-wrap">
              <h4 className={createTypeSnippet ? "create-snippet-type create-type-selected" : "create-snippet-type"} onClick={() => {setCreateTypeSnippet(true)}}>Snippet</h4>
              <h4 className={createTypeSnippet ? "create-snippet-type" : "create-snippet-type create-type-selected"} onClick={() => {setCreateTypeSnippet(false)}}>Collection</h4>
            </div>
            { createTypeSnippet ?
                <CreateSnippetForm selected={createTypeSnippet}></CreateSnippetForm>
                :
                <CreateSnippetCollectionForm selected={createTypeSnippet}></CreateSnippetCollectionForm>
            }
          </div>
        </div>
        
      </section>
    </>
  );
}

export default CreateSnippet;
