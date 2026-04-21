
const fs=require('fs');
const path=require('path');
const rootDir=require('../utils/path');


  const favouritedataPath=path.join(rootDir,'data','favourites.json');


module.exports=class Favourites{

  static addToFavouritelist(homeId,callback){
    Favourites.getFavouriteList((favourites)=>{
      if(favourites.includes(homeId)){
        callback('Home is already marked favourite');
      }
      else{
        favourites.push(homeId);
        fs.writeFile(favouritedataPath,JSON.stringify(favourites),callback);
      }

    });
    
  }

static getFavouriteList(callback){
  fs.readFile(favouritedataPath, (error, data) => {
    if (error) {
      // File not found or other read error → return empty list
      return callback([]);
    }
    try {
      const parsed = data.length ? JSON.parse(data) : [];
      callback(parsed);
    } catch (err) {
      console.error("Invalid JSON in favourites.json:", error);
      callback([]);
    }
  });
}


//Remove From Favourite list
 static removeFromFavouriteById(delhomeid,callback){
    Favourites.getFavouriteList(homeIds=>{
   const updatedhomeIds= homeIds.filter(homeId=>delhomeid !== homeId);
     fs.writeFile(favouritedataPath,JSON.stringify(updatedhomeIds),callback);
     
    })
  }

};
