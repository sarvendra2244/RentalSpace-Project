 const Favourites = require('../models/favourites');

const Home=require('../models/homedata');

exports.homePage=(req,res,next)=>{
   const registeredHome=Home.fetchAll(registeredHome=> res.render('store/homelist',{registeredHome:registeredHome,pagetitle:"Home List"}));  
};

exports.homedetails=(req,res,next)=>{
   const homeid=req.params.homeid;
   console.log(homeid); 
   Home.findbyid(homeid,home=>{
      console.log('Home detail found',home);
      res.render('store/home-detail',{home:home,pagetitle:"Home details"});
   }) 
};

exports.getIndex=(req,res,next)=>{   
      const favouritelist=Home.fetchAll(registeredHome=> res.render('store/homepage',{registeredHome:registeredHome,pagetitle:"Airbnb Home"}));  
};

exports.getbookings=(req,res,next)=>{
    res.render('store/bookings',{pagetitle:"My bookings"}); 
};


exports.getFavouriteList=(req,res,next)=>{
 Favourites.getFavouriteList((favourites)=>{
   Home.fetchAll((registeredHomes)=>{
      const favouritesWithDetails=favourites.map(homeId=>registeredHomes.find(home=>home.id===homeId));
      console.log("favourite homes",favouritesWithDetails)
      res.render('store/favourite-list',{favourites:favouritesWithDetails,pageTitle:"My favourites"});
   });
 });   
};





exports.postAddToFavourite=(req,res,next)=>{
   console.log('Home added to favourties', req.body);
   const homeId=req.body.id;
   Favourites.addToFavouritelist(homeId,error=>{
      if(error){
         console.log('error while marking favourrites',error);
      }
       res.redirect('/favourites'); 
   })
};

exports.postRemoveFromFavourite=(req,res,next)=>{
   const homeId=req.params.homeid;
   console.log('Home removed from favourties',homeId);
   Favourites.removeFromFavouriteById(homeId,error=>{
      if(error){
         console.log('error while deleting favourrites',error);
      }
       res.redirect('/favourites'); 
   })
};





