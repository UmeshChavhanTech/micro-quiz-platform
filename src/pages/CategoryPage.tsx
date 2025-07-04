import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Trophy, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { quizData } from "../components/data/quizData";

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  const category = quizData.categories.find(cat => cat.id === categoryId);
  const categoryQuizzes = quizData.quizzes.filter(quiz => quiz.categoryId === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 mr-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Categories
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">
              {category.title} Quizzes
            </h1>
          </div>
        </div>
      </header>

      {/* Category Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            {category.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
            {category.description}
          </p>
        </div>
      </section>

      {/* Quizzes Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryQuizzes.map((quiz, index) => (
            <Link key={quiz.id} to={`/quiz/${quiz.id}`} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 bg-white/70 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getDifficultyColor(quiz.difficulty)}>
                      {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
                    </Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{quiz.rating || '4.5'}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {quiz.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {quiz.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{quiz.estimatedTime || '5-10 min'}</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>{quiz.questions.length} Questions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
