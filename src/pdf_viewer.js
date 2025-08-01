import react from "react";

const PDFViewer = ({PDFUrl}) => {
    return(
        <div style={{width: 'auto', height: 'auto'}}>
            <iframe src={PDFUrl} 
            title="PDFViewer" 
            width='450px' 
            height='640px' 
            style={{
                border: 'none'
            }}/>
        </div>
    );
};

export default PDFViewer;