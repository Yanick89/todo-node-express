const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');
const { title } = require('process');

const maListe = [];

const app = express()


// app.use(cookieSession({
//     secret: 'secret'
// }))

// On utilise un middleware pour parser les données encodées à récupérer avec url
app.use(bodyParser.urlencoded({extended: false}))

// On configure le chemin pour l'optimisation de routes et dire que toutes nos vues sont dans views
app.set('views', path.join(__dirname, 'views'));


// On affiche la vue du formulaire au navigateur
app.get('/', (req, res)=>{
    res.render('todo.ejs', {maListe})
});


// On ajoute les nouveau éléments à la liste et une condition qui marque un nombre définit à ajouter
app.post('/',(req, res) => {
    
    if(maListe.length  < 5){
        maListe.push({serie: req.body.titre});
        res.redirect('/')
        console.log(maListe);
    } else{
        res.send('Oooups...!!!!!! vous ne pouvez plus rajouter une série, merci et repassez nous voir prochainement😉')
    }
})

// Suppression d'une ligne de course dans la liste
.get('/:id', (req, res) =>{
    maListe.splice( req.params.id, 1)
    console.log(maListe);
    res.redirect('/')
})


// On lance le serveur au port 3000
app.listen(3000, ()=>{
    console.log('le serveur est lancé au port 3000');
})