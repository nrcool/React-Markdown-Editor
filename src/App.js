import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge } from "react-bootstrap";
import TextArea from "./TextArea";
import Previewer from "./Previewer";

function App() {
  const [text,setText]=useState(`# Readme File
  A README is often the first item a visitor will see when visiting your repository. README files typically include information on:
  
  -   What the project does
  -   Why the project is useful
  -   How users can get started with the project
  -   Where users can get help with your project
  -   Who maintains and contributes to the project
  
  If you put your README file in your repository's root,  ${`docs`}, or hidden  ${`.github`}  directory, GitHub will recognize and automatically surface your README to repository visitors.`)
  return (
    <div className="coontainer">
      <div className="jumbotron">
        <h1 className="text-center">
          <Badge variant="secondary">MarkDown Editor</Badge>
        </h1>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-5">
        <h2 className="text-center">
          <Badge variant="success">MarkDown</Badge>
        </h2>
        <TextArea text={text} setText={setText} /> </div>
        <div className="col-md-5 text-white" style={{position:"relative"}}> 
        <h2 className="text-center">
          <Badge variant="warning">Preview</Badge>
        </h2>
        <Previewer text={text} /></div>
      </div>
    </div>
  );
}

export default App;
