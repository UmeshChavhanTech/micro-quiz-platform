import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { quizData } from "../components/data/quizData";
import { useToast } from "@/hooks/use-toast";

const QuizPage = () => {
  const { quizId } = useParams();
  const { toast } = useToast();
  
  const quiz = quizData.quizzes.find(q => q.id === quizId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Quiz Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + (selectedAnswer !== null ? 1 : 0)) / quiz.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newAnswers);

    // Show result for current question
    setShowResult(true);
    
    // Auto-advance after showing result
    setTimeout(() => {
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Quiz completed
        const finalScore = newAnswers.reduce((acc, answer, index) => {
          return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
        }, 0);
        setScore(finalScore);
        setQuizCompleted(true);
        
        toast({
          title: "Quiz Completed!",
          description: `You scored ${finalScore}/${quiz.questions.length}`,
        });
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setShowResult(false);
    setQuizCompleted(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / quiz.questions.length) * 100;
    if (percentage >= 90) return "Excellent! 🎉";
    if (percentage >= 70) return "Great job! 👏";
    if (percentage >= 50) return "Good effort! 👍";
    return "Keep practicing! 💪";
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-md border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
              Quiz Completed! 🎊
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-8">
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {score}/{quiz.questions.length}
              </div>
              <div className="text-xl text-gray-600 mb-4">
                {Math.round((score / quiz.questions.length) * 100)}% Correct
              </div>
              <div className="text-2xl font-semibold text-gray-800">
                {getScoreMessage()}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={restartQuiz} className="flex items-center">
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              <Link to={`/category/${quiz.categoryId}`}>
                <Button variant="outline" className="w-full">
                  More {quiz.categoryId} Quizzes
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={`/category/${quiz.categoryId}`} className="flex items-center text-gray-600 hover:text-gray-800">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to {quiz.categoryId}
            </Link>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-gray-500" />
              <span className="text-gray-600">Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-2">
        <Progress value={progress} className="w-full" />
      </div>

      {/* Quiz Content */}
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border-0 shadow-xl">
          <CardHeader>
            <div className="flex justify-between items-start mb-4">
              <Badge variant="secondary">
                {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
              </Badge>
              <div className="text-sm text-gray-500">
                {currentQuestionIndex + 1} / {quiz.questions.length}
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-300 hover:shadow-md";
                
                if (showResult) {
                  if (index === currentQuestion.correctAnswer) {
                    buttonClass += " bg-green-50 border-green-500 text-green-800";
                  } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                    buttonClass += " bg-red-50 border-red-500 text-red-800";
                  } else {
                    buttonClass += " bg-gray-50 border-gray-300";
                  }
                } else {
                  if (selectedAnswer === index) {
                    buttonClass += " bg-blue-50 border-blue-500 text-blue-800";
                  } else {
                    buttonClass += " bg-white border-gray-300 hover:border-blue-300";
                  }
                }

                return (
                  <button
                    key={index}
                    className={buttonClass}
                    onClick={() => !showResult && handleAnswerSelect(index)}
                    disabled={showResult}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {showResult && (
                        <span>
                          {index === currentQuestion.correctAnswer ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="h-5 w-5 text-red-600" />
                          ) : null}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {!showResult && (
              <div className="mt-8 text-center">
                <Button 
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  size="lg"
                  className="px-8"
                >
                  {currentQuestionIndex === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </Button>
              </div>
            )}

            {showResult && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-center">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="h-6 w-6 mr-2" />
                      <span className="font-semibold">Correct!</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-red-700">
                      <XCircle className="h-6 w-6 mr-2" />
                      <span className="font-semibold">Incorrect</span>
                    </div>
                  )}
                </div>
                {currentQuestion.explanation && (
                  <p className="text-center text-gray-700 mt-2">
                    {currentQuestion.explanation}
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizPage;
