import React from "react";
import { useNavigate } from "react-router-dom";

function Navigate() {

  const navigate = useNavigate();
  const goToPage = (e) => {
    console.log(e.currentTarget.dataset.page);
    navigate(e.currentTarget.dataset.page);
  } 

  return (
    <React.Fragment>
      <div className="position-relative">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" id="pg1" data-page="1" className="btn btn-primary" onClick={goToPage}>
            Go to Page 1
          </button>
          <button type="button" id="pg2" data-page="2" className="btn btn-primary" onClick={goToPage}>
            Go to Page 2
          </button>
          <button type="button" id="pg3" data-page="3" pclassName="btn btn-primary" onClick={goToPage}>
            Go to Page 3
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navigate;
