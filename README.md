# AngularTodos

Todos using MEAN stack

# How it Work ?

Run `npm install` in the Back-end directory

Run `mongod`in the data directory to lauch the mongo server

Insert some data in your local db:
db.list.insert({title:"Installer MongoDB", isDone: false})
db.list.insert([{title: "Configurer MongoDB", isDone: false}, {title:"Utiliser le shell MongoDB", isDone: false}])

Run `npm start` to lauche the app