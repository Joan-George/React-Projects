import './App.css';
import testFile from './test.pdf'
import {PDFDocument} from 'pdf-lib'

function App() {
  const readPdf = async () => {
      console.log("working")
      console.log(testFile)
      const bytes = new Uint8Array(readPdf(testFile))
      const pdfDoc = await PDFDocument.load(bytes)
  }

  return (
    <div className="App">
        <button className="read-pdf" onClick={readPdf}>Read Pdf</button>
    </div>
  );
}

export default App;
