
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "IPL Prediction System",
      description: "A comprehensive cricket analytics system that predicts IPL match outcomes using machine learning algorithms. Built with Python and data visualization tools to analyze player statistics, team performance, and historical match data.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Power BI"],
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      title: "Capstone Project",
      description: "A full-stack web application developed as the final year capstone project. Features comprehensive user management, data processing, and interactive dashboards for business intelligence and reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Python"],
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work and the solutions I've built
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-600">
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
