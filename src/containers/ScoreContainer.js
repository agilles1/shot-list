import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from '../beethoven-5.pdf'
import { Col, Button, Row } from 'react-bootstrap'

function ScoreContainer() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

  return (
    <Row>
      <Col>
        <Button onClick={() => {if (pageNumber > 1) {setPageNumber(pageNumber - 1)} }} >{"<<"}</Button>
      </Col>
      <Col>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber}/>
          </Document>
     </Col> 
    <Col>
        <Button onClick={() => setPageNumber(pageNumber + 1)}>{">>"}</Button>
    </Col>
   </Row>
  );

}

export default ScoreContainer