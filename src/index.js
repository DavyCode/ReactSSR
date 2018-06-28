const 
      express = require('express'),
      app = express(),
      React = require('react'),
      renderToString = require('react-dom/server').renderToString,
      Home = require('./client/components/Home').default;



app.get('/', (req, res) => {
  const content = renderToString(<Home />)

  res.send(content)
})

app.listen(3000, () => {
  console.log('App up on port 3000')
})