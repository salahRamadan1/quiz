import {Quiz} from './Quiz.js'

export class Settings{

    constructor(){
        this.categoryElemnt = document.getElementById("category");
        this.difficulty = document.getElementsByName("difficulty");
        this.numberOfQues = document.getElementById("numOfQuestions");

        this.nextBtn = document.getElementById("startBtn");
        this.nextBtn.addEventListener("click", this.getData.bind(this) )

    }

    async getData(){

        if( this.numberOfQues.value >= 0 && this.numberOfQues.value != ""  ){

            // https://opentdb.com/api.php?amount=5&category=25&difficulty=easy


            let categoryValue = this.categoryElemnt.value;
            let numberOfQuesValue = this.numberOfQues.value;
            let difficultyvalue = [...this.difficulty].filter( (elem) => { return elem.checked==true } )[0].value;

            let myURL = `https://opentdb.com/api.php?amount=${numberOfQuesValue}&category=${categoryValue}&difficulty=${difficultyvalue}`;


            let myResults = await this.getAPI(myURL);
            console.log(myResults);

            $("#setting").fadeOut(1000, function(){
                $("#quiz").fadeIn(1000);
                let myQuiz = new Quiz(myResults);
            })

        }
        else{

            $("#formAlert").fadeIn(1000);

        }



    }


    async getAPI(newURL){

        let myData = await fetch(newURL);
        let myResponse = await myData.json();

        return myResponse.results;

    }


}


