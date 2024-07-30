import { differenceInSeconds } from 'date-fns';
import chalk from "chalk";
import inquirer from 'inquirer';

const res = await inquirer.prompt([
    {
        type: "number",
        name: "userInput",
        message: chalk.blueBright("Enter amount of second: "),
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.red("Please Enter a Valid Number");
            }
            else if (input > 60) {
                return chalk.red("Seconds should be less than or equal to 60");
            }{
                return true;
              }
              
        }
                
     } 
            
    
]);
    let input = res.userInput;

    function startTime(val:number) {
       const intTime = new Date().setSeconds(new Date().getSeconds() + val);
       const intervalTime = new Date(intTime);
       setInterval(()=>{
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime,currentTime);
        if(timeDifference <= 0){
            console.log(chalk.bgGreenBright("Time is up!"));
            process.exit();
        }
        const min = Math.floor((timeDifference % (3600*24)) / 3600);
        const sec = Math.floor(timeDifference % 60);
        console.log(chalk.yellow(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`));

       },1000)
    }
    startTime(input);

    