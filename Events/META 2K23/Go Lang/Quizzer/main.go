package main

import (
	"fmt"
	"os"
	"time"
)

func main() {
	problems := pullProblem("https://quizzer-api-production.up.railway.app/questions")		// calling the pullProblem function
	
	tObj := time.NewTimer( time.Duration(len(problems)) * 5 * time.Second)					// creating the timer 


	
	correctAns:=0																			//Initial Score to 0

	//Looping through all the problems
	for i,problem := range problems{
		var ans string;

		//printing the question
		fmt.Println(problem.Question);
		fmt.Printf(" a:%v \n b:%v \n c:%v \n d:%v\n",problem.Options.A,problem.Options.B,problem.Options.C,problem.Options.D);
		
		//channel for communication of user input
		ansC := make(chan string)

		//getting the input in new routing
		go func(){
			fmt.Scan(&ans)
			ansC<- ans
		}()



		select{

		// if time is over
		case <-tObj.C:
			fmt.Print("Timer has been triggered")
			fmt.Printf("correct %d out of %d \n",correctAns,len(problems));
			os.Exit(1);


		// if questions are over
		case channelAns := <-ansC:
			if channelAns == problem.Answer{	//incrementing score if answer is correct
				correctAns++;
			}
			if i==len(problems)-1{				// Display result and terminate if current question is the last one
				fmt.Print("Questions are over\n")
				fmt.Printf("correct %d out of %d \n",correctAns,len(problems));
				os.Exit(2);
			}	
		}
	}
}
