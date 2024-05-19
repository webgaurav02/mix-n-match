"use client";
import { PropagateLoader } from 'react-spinners';


const loading = () => {
    return (
        <div className="spinner-container">
          <div className="spinner-background" />
          <div className="spinner">
            <PropagateLoader color="#00FF38" />
          </div>
          <style jsx>{`
            .spinner-container {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1000;
            }
            .spinner-background {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.95);
            }
            .spinner {
              position: relative;
              z-index: 1;
            }
          `}</style>
        </div>
      );
  };
  
  export default loading;
  