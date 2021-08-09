import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from '../beethoven-1.pdf'

function ScoreContainer() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
          <button/>
          Page {pageNumber} of {numPages}</div>
    </div>
  );

}

export default ScoreContainer