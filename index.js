let KidsBreakfast= [
    {
        name: "Josiah",
        meal: "Crossiant",
        amount: 2
    },
    {
        name: "Jeal",
        meal: "cereal",
        amount: 1
    },
    {
        name: "Jaida",
        meal: "baby milk",
        amount: 1
    }
    ]
    
    console.log(kidsBreakfast)
    
    function accessKidsBreakInfo(){
        let KidfavMeal = document.getElementById("Kidsfav")
        console.log(KidfavMeal)
    
        let snacks = document.getElementsByClassName("snack")
        console.log(snacks)
    
        for(let i=0; i<snacks.length; i++){
            console.log(snacks[i].innerHTML)
        }
    
        let name= myFavSnack.getElementsByClassName("name")
        let snack= myFavSnack.getElementsByClassName("")
        let stash= myFavSnack.getElementsByClassName("stash")
    
        console.log(name[0].innerHTML, meal[0].innerHTML, amount[0].innerHTML)
        console.log(name, meal, amount)
      
    }
    
    function createSnackCard(name, snack, stash){
        let snackCardParent.className = parent
    
    
        let nameP = document.createElement("p")
        nameP.className = "name"
        namep.innerHTML = name
    
        let snackP = document.createElement("p")
        snackP.className = "snack"
        snackP.innerHTML = snack
    
        let stashP = document.createElement("p")
        stashP.className = "stash"
        stashP.innerHTML = stash
    
        // how to add the p children to div parent
        snackCardParent.append(nameP, snackP, stashP)
    
        // how to add your snackCard to your html page by
        // adding it to the allsnacks parent
    
        // select all parent
        // append card to parent
        // call function
    
        document.getElementById("allSnacks").appendChild(snackCardParent)
    
        let mainParent = document.getElementById("allSnacks")
        mainParent.appendChild(snackCardParent)
    }
    
    
    accessKidsBreakfastInfo()
    createKidsBreakfastCard("testName", "testMeal","testAmount")
    moreSnacks.forEach(snackObj=>createSnackCard(snackObj.name, snackObj.snack, snackObj.stash)
    )
    
    let promptString = prompt("please provide the values for the snack separated by commas")
    let valuesArray = promptString.split(",")
    // this won't work, we need to do this for every single seperate value
    // stringToModify.trim()
    // you can foreach or regular for loop
    let trimmedValuesArray = []
    valuesArray.forEach(value=>trimmedValuesArray.push(value.trim()))
    console.log(trimmedValuesArray)
    
    createSnackCard(...trimmedValuesArray)
    