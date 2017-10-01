/**
*
* Pagination
*
*/

import React, { PropTypes } from 'react'

const Pagination = ({ currentPage, totalPages, changePage }) => {
  const pages = () => {
    const pageNumbers = []
    for (let i = 1; i < totalPages; i += 1) {
      pageNumbers.push(i)
    }
    return pageNumbers
  }

  const visiblePages = 10
  const threshold = 8
  const padding = 5
  const isFirstPage = (currentPage === 1)
  const isLastPage = (currentPage === totalPages)
  const cutoffLower = (currentPage - padding)
  const cutoffUpper = (currentPage + padding)

  if (totalPages === 1) return null
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${isFirstPage && 'disabled'}`}>
          <a className="page-link" href="#" tabIndex="-1" onClick={changePage.bind(this, currentPage - 1)}>Previous</a>
        </li>
        {pages().map((page, key) => {
          // If current page is less than or equal to cut off and page we're looping is less than cut off, show it
          if (
            (currentPage <= visiblePages && page <= visiblePages && currentPage < threshold)
            ||
            (currentPage >= threshold && page === currentPage)
            ||
            (page >= cutoffLower && page <= cutoffUpper)
          ) {
            return (
              <li className={`page-item ${(page === currentPage) && 'active'}`} key={key}>
                <a className="page-link" href="#" onClick={changePage.bind(this, page)}>{page}</a>
              </li>
            )
          }

          return null
        })}
        <li className={`page-item ${isLastPage && 'disabled'}`}>
          <a className="page-link" href="#" onClick={changePage.bind(this, currentPage + 1)}>Next</a>
        </li>
      </ul>
    </nav>
  )
}


Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
}

export default Pagination
