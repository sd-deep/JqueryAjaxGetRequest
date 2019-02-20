$(document).ready(()=>{
    getAllData();
});

let getAllData = ()=>{
    console.log("making request");

    $.ajax({
        
        type : 'Get',
        dataType : 'json',
        url : 'http://api.open-notify.org/astros.json',
        success : (data) =>{
            console.log(data);
            let allPeople = data.people;

            for(people of allPeople){

                let tempRow = `<div class="row justify-content-center no-gutters">
                                    <div class="col-6 col-sm-4">${people.name}</div>
                                    <div class="col-2 col-sm-1">${people.craft}</div>
                               </div>`

            $('#inputSpace').append(tempRow);   
            console.log("appended")                
            }

        },
        
        error : (data) => {
            alert("something went wrong")
        }
    });

}