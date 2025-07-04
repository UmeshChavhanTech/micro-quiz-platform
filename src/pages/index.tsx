import { Link } from "react-router-dom";
import { Brain, Calculator, FlaskConical, Code, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  {
    id: "history",
    title: "History",
    description: "Test your knowledge of historical events and figures",
    icon: BookOpen,
    color: "from-amber-500 to-orange-600",
    quizCount: 5
  },
  {
    id: "science",
    title: "Science",
    description: "Explore the wonders of physics, chemistry, and biology",
    icon: FlaskConical,
    color: "from-green-500 to-emerald-600",
    quizCount: 7
  },
  {
    id: "math",
    title: "Mathematics",
    description: "Challenge yourself with mathematical problems",
    icon: Calculator,
    color: "from-blue-500 to-cyan-600",
    quizCount: 6
  },
  {
    id: "programming",
    title: "Programming",
    description: "Test your coding knowledge and skills",
    icon: Code,
    color: "from-purple-500 to-pink-600",
    quizCount: 8
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <Brain className="h-8 w-8 text-purple-600 mr-3" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Micro-Quiz Platform
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
          Challenge Your Mind
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
          Dive into our collection of engaging quizzes across various topics. 
          Test your knowledge, learn something new, and have fun!
        </p>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Choose Your Category
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 bg-white/70 backdrop-blur-sm animate-fade-in" 
                      style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-gray-100 rounded-full px-4 py-2 inline-block">
                      <span className="text-sm font-medium text-gray-700">
                        {category.quizCount} Quizzes Available
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white/20 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            © 2025 Micro-Quiz Platform. Challenge yourself, learn something new!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
