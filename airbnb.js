const express=require('express');

const path=require('path');
const app=express();
const storeRouter=require('./router/storeRouter');
const {hostRouter, registeredHome}=require('./router/hostRouter');
const rootDir=require('./utils/path');
const errorController=require('./controller/errors')
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(rootDir,'public')));

app.use(express.urlencoded());
  
app.use(storeRouter);

app.use('/host',hostRouter);




//Error Page messege
app.use(errorController.errorController)
const PORT=3001;
app.listen(PORT,(req,res)=>{
  console.log(`server is sucessfuly at address http://localhost:${PORT}`);
})