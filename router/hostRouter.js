const express=require('express');
const hostRouter=express.Router();
const hostController=require('../controller/hostController');

hostRouter.get('/addHome',hostController.getAddHome);

hostRouter.get('/gethosthome',hostController.gethosthome);

hostRouter.get('/edit-home/:homeid',hostController.getEditHome);



hostRouter.post('/result',hostController.postAddHome);

hostRouter.post('/updateHome',hostController.postUpdateHome);

hostRouter.post('/delete-home/:homeid',hostController.postDeleteHome);



exports.hostRouter=hostRouter;
