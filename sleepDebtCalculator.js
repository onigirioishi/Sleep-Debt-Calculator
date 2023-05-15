const getSleepHours = day => {
  if (day === "monday")
{
  return 5
} else if (day === "tuesday"){
  return 5
  }else if (day === "Wednesday"){
   return 7 
  } else if(day === "thursday"){
    return 5
  } else if (day==="friday"){
    return 3
  } else if (day === "Saterday"){
    return 4
  } else if (day==="Sunday"){
    return 8
  } else{
    return "Not a valid day of the week"
  } 
}

const getActualSleepHours = () => 
   
 getSleepHours("monday") + 
 getSleepHours("tuesday")+
 getSleepHours("wednesday") + 
 getSleepHours("thursday") + 
 getSleepHours("friday") + 
 getSleepHours("saturdayday") + 
 getSleepHours("sunday");

 console.log(getActualSleepHOurs());
 console.log(getSleepHours("monday"));
 
const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours * 7
}
const calculateSleepDebt = () => {
const calculateSleepHours =   getActualSleepHours()
const idealSleephours =
idealSleepHours()

if (actualSleepHours === idealSleepHours){
  console.log("The user got the perfect amount of sleep")
} else if (actualSleepHours > idealSleepHours){
  console.log("The user got more hours of sleep than needed!")
} else if (idealSleepHours < idealSleepHours){
  console.log("The user should get some rest")
 } else
 console.log("Error!")
};


calculateSleepDebt();




  