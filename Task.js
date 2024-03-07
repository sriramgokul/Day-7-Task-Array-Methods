// API ---- https://restcountries.com/v3.1/all

// Get all the countries from Asia continent /region using Filter function

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function() {
    const data = JSON.parse(xhr.response);
    const data2 = data.filter((val)=>{
        return val.region === "Asia";
    })
    console.log(data2);
}

// Get all the countries with a population of less than 2 lakhs using Filter function

const rrr = new XMLHttpRequest();
rrr.open("GET", "https://restcountries.com/v3.1/all");
rrr.send();
rrr.onload = function() {
    const sss = JSON.parse(rrr.response);
   const www = sss.filter((val)=>{
       return val.population < 200000
    })
    console.log(www);
}

// Print the following details name, capital, flag, using forEach function

const fff = new XMLHttpRequest();
fff.open("GET", "https://restcountries.com/v3.1/all");
fff.send();
fff.onload = function() {
    const ggg = JSON.parse(fff.response);
    ggg.forEach(val=>{
        console.log(val.name);
        console.log(val.capital);
        console.log(val.flag);
    })
}

// Print the total population of countries using reduce function

const qqq = new XMLHttpRequest();
qqq.open("GET", "https://restcountries.com/v3.1/all");
qqq.send();
qqq.onload = function() {
    const yyy = JSON.parse(qqq.response);
    const uuu = yyy.reduce((acc,val)=>{
        return acc += val.population;
        
    },0)
    console.log(uuu);
}

// Print the country that uses US dollars as currency.

const iii = new XMLHttpRequest();
iii.open("GET","https://restcountries.com/v3.1/all");
iii.send();
iii.onload = function() {
    const res=JSON.parse(iii.response);
   const currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }
    
