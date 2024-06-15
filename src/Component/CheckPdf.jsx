import React, { useState } from 'react';
import { Viewer,Worker  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

export const CheckPdf = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <section className='my-10 flex justify-center items-center '>
      <div style={{height:"100%"}} className='max-sm:w-[350px] w-[550px] ' >
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
      <Viewer
        fileUrl={props.pdfPath || ''}
        onLoading={() => setLoading(true)}
        onLoaded={() => setLoading(false)}
      />
      </Worker>
      </div>
    </section>
  );
};