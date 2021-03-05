const linkResolver = (document) => {
  if (document.type === 'post') return '/' + document.uid
  else return '/'
}

export default linkResolver
