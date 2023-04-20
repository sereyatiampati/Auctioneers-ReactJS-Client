import React from 'react'
import './Pagination.css'
const Pagination = ({ totalbids, bidsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalbids / bidsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className='pagination'>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>{page}</button>
        )
      })
      }
    </div>
  )
}

export default Pagination