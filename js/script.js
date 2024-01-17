
const populate = async (value, currency) =>{
//     const url = "https://api.currencyapi.com/v3/latest";
// const apiKey = "cur_live_rlNsCQsW58NZ9RAjf6guy8Tc4fiSdcVLmz70iAwS";
const apiKey = "cur_live_rlNsCQsW58NZ9RAjf6guy8Tc4fiSdcVLmz70iAwS";
const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}`;
let response = await fetch(url);
let result = await response.json();
// console.log(result);

document.querySelector(".output").style.display = "block";
        
let myStr = "";

for(let key of Object.keys(result["data"])){
   
    myStr += `
    <tr>
        <td>${key}</td>
        <td>${result["data"][key]["code"]}</td>
        <td>${Math.round(result["data"][key]["value"] * value)}</td>
    </tr>
`;
}
    
const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
   populate(value,currency)
})



