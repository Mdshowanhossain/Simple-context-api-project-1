import React from "react";

const Pagination = () => {
  return (
    <>
      <section className="pagination-section my-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Pagination;