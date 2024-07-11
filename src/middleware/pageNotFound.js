const pageNotFound = (req, res) => {
  res.status(404).json({ response: '404 - Page Not Found' })
}

export { pageNotFound }
