const express=require('express');

const storeRouter=express.Router();
const homePage=require('../controller/storeController')

storeRouter.get('/',homePage.homePage);
storeRouter.get('/index',homePage.getIndex);
storeRouter.get('/favourites',homePage.getFavouriteList);



storeRouter.get('/homes/:homeid',homePage.homedetails);

storeRouter.get('/bookings',homePage.getbookings);

storeRouter.post('/favourites',homePage.postAddToFavourite);

storeRouter.post('/favourites/removeFromFavourite/delete/:homeid',homePage.postRemoveFromFavourite);


module.exports=storeRouter;