let container = document.getElementById("container");
let selectTag = document.getElementById("select");

selectTag.addEventListener("change",function(){
    console.log(selectTag.value);
    fetch(selectTag.value);
});

async function fetchData (order){
    let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"


    if(order!=undefined){
      
        url += "?sort=salary&order=asc"
    }
    
    try {
        let res = await fetch(url);
        let data = await res.json();
        // return data.data
        showData(data.data);
        // console.log(data.data);
    } catch (error) {
        console.log("data not fetching from url")
    }
}

fetchData();



function showData(data){

//     let employeeContainer=document.createElement("div")
// employeeContainer.className="dataclass"


    data.forEach(element => {
        let empolyeeData = document.createElement("div")
        // empolyeeData.innerHTML = element.data;
       
        let employeeName = document.createElement("h3")
        employeeName.innerHTML = element.name;

        // let employeeImg = document.createElement("img")
        // employeeImg.src= element.image;

        let employeeGender = document.createElement("p")
        employeeGender.innerHTML = element.gender;

        let empolyeeDepartment = document.createElement("p")
        empolyeeDepartment.innerHTML = element.department;

        let empolyeeSalary = document.createElement("p")
        empolyeeSalary.innerHTML = element.salary;

        let employeeId = document.createElement("h2")
        employeeId.innerHTML=element.id

        empolyeeData.append( employeeId,employeeName,employeeGender,empolyeeSalary,empolyeeDepartment);
        // employeeContainer.append(empolyeeData)
        container.appendChild(empolyeeData);

    });


}

