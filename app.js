const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express();


app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(morgan('tiny'))

app.listen(3000)

app.use(( req, res, next ) => {
    console.log( req.method );
    next();
})

app.get('/', ( req, res ) => {
    res.render( 'index', { title: 'Ana Sehife' } )
});

app.get('/login', ( req, res ) => {
    res.render( 'login', { title: 'Login' })
})

app.get('/about', ( req, res ) => {
    res.render( 'about', { title: 'About' } )
});

app.get('/about-us', ( req, res ) => {
    res.redirect( '/about' )
});

app.use(( req, res ) => {
    res.status(404).render( '404', { title: '404' } )
});