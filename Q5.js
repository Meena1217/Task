function btnclicked() 
{
  let exp = new XMLHttpRequest();
  exp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  exp.send();
  exp.onload = function () {
    if (exp.status === 200) 
    {
      let maindata = JSON.parse(this.response);
      let tds;
      for (let i =0; i < maindata.length;i++)   
       {
        tds = `
          <tr>
            <td>${maindata[i].id}</td>
            <td>${maindata[i].name}</td>
            <td>${maindata[i].email}</td>
          </tr>
          `
        document.getElementById("data").innerHTML += tds
      }
    }
  }
}