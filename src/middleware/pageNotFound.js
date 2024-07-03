const pageNotFound = (req, res) => {
  res.status(404).json({ message: 'Error 404 - Page Not Found' })
}

export { pageNotFound }
