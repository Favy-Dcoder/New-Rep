const isMortal = (firstName) => {
    if(typeof(firstName) === "string"){
      const checkForFirstNameOnly = firstName.split(" ").length > 1;
      if(!checkForFirstNameOnly){
        const takeOnlyFirstName = (n) => n.split(" ")[0];
        const convertFirstNameToUpperCase = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase();
        if (convertFirstNameToUpperCase(takeOnlyFirstName(firstName)) === "Socrates"){
          console.log(true);
          return true;
        }else {
          console.log(false);
          return false;
        } 
      }else{
      console.log("Only first name is required")
      }
    }else{
      console.log("Name must be a string")
    }
  }
  
  isMortal("Socrates");
  
  
 const checkCakeFlavour = (arr, bool) => arr.forEach(flavour => {
    if(flavour !== "chocolate"){
      bool = false;
      console.log("Cake flavour is " + flavour);
    }else {
      bool = true;
      console.log("Cake flavour is " + flavour);
    }
    
    return bool;
  });
  
  const cake = [
    "chocolate",
  ]
  
  checkCakeFlavour(cake);