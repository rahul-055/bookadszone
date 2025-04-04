

export const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
};

export const capitalize = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const navigateTo = (path : string) => {
    console.log("Navigate to",path);
    
    window.history.pushState({}, '', path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };


export const toTittleCase=(str:string)=>{
    if (!str) return ""; 
    str = str.toLowerCase(); 
    return str.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}


export const  trimStrings =(dataObj:{[key: string]: string})=>{
    
    const keys =Object.keys(dataObj)
    keys.forEach(k=>dataObj[k] && typeof dataObj[k] === 'string' ?dataObj[k]= dataObj[k].trim():dataObj[k] )
     return  dataObj
   }






  