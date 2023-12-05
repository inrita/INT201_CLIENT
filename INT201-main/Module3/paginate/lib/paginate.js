// getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) returns an array of items from allItems that calculates on a given current page and rows per page.
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if (allItems === null || allItems === undefined) return undefined
  if (allItems.length === 0) return []
  if (rowsPerPage <= 0) return allItems
  if (currentPage <= 0) return allItems
  const itemsOfCurrentPage = allItems.slice(
    rowsPerPage * (currentPage - 1),
    rowsPerPage * (currentPage - 1) + rowsPerPage
  )
  return itemsOfCurrentPage.length > 0 ? itemsOfCurrentPage : []
}

// getTotalPages(allItems, rowsPerPage) returns the total number of pages by calculating from a given allItems’s length and rows per page
function getTotalPages(allItems, rowsPerPage) {
  if (allItems === null || allItems === undefined) return undefined
  if (rowsPerPage === 0 || rowsPerPage === undefined || rowsPerPage === null)
    return 1
  return Math.ceil(allItems.length / rowsPerPage)
}

// npm test CommonJS
// module.exports = { getItemsOfCurrentPage, getTotalPages }

// browser ES module
export { getItemsOfCurrentPage, getTotalPages }
