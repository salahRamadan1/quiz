export class Quiz{

    constructor(arrayOfQuestions){

        this.arrayOfQuestions = arrayOfQuestions;
        this.numOfQues = arrayOfQuestions.length;

        this.currentElement = document.getElementById("current");
        document.getElementById("totalAmount").innerHTML = this.numOfQues;
        this.questionElemnt = document.getElementById("question");
        this.rowAnswerElement = document.getElementById("rowAnswer");
        

        this.score = 0;
        this.currentQues = 0;

        this.nextBtn = document.getElementById("next");
        this.nextBtn.addEventListener("click", this.checkAnswer.bind(this) )

        this.showQuestion();
    }

    checkAnswer(){

        let correctAnswer = this.arrayOfQuestions[this.currentQues].correct_answer;

        let allAnswers = Array.from(document.getElementsByName("answers"));
        let userAnswer = allAnswers.filter( (elem) => { return elem.checked==true } )[0].value;

        if( userAnswer == correctAnswer ){

            $("#Correct").fadeIn(1000);
            $("#inCorrect").fadeOut(200);
            this.score++;
        }
        else{
            $("#inCorrect").fadeIn(1000);
            $("#Correct").fadeOut(200);

        }
        this.currentQues++;

        if( this.currentQues >= this.numOfQues  ){
            $("#quiz").slideUp(1000);
            $("#finish").fadeIn(1000);
            $("#score").html(this.score);

            let tryBtn = document.getElementById("tryBtn");
            tryBtn.addEventListener("click", function(){
                location.reload();
            })
        }
        else{
            this.showQuestion()
        }

    }

    showQuestion(){
        $("#inCorrect").fadeOut(200);
        $("#Correct").fadeOut(200);

        this.currentElement.innerHTML = this.currentQues + 1;
        this.questionElemnt.innerHTML = this.arrayOfQuestions[this.currentQues].question;
        
        let allAnswers = [this.arrayOfQuestions[this.currentQues].correct_answer , ...this.arrayOfQuestions[this.currentQues].incorrect_answers]
        allAnswers = this.shuffle( allAnswers );

        let cartona = "";

        for(let i=0;i<allAnswers.length; i++){

            cartona += ` 
                <div class="form-check">
                    <input type="radio" name="answers" value="${allAnswers[i]}" class="form-check-input" />
                    <label class="form-check-label">${allAnswers[i]}</label>
                </div>
            `;

        }

        this.rowAnswerElement.innerHTML = cartona;
        
    }

    shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }


}



