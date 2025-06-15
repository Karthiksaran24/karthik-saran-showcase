
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Python", level: 85 },
        { name: "Excel", level: 90 },
        { name: "MySQL", level: 80 },
        { name: "Power BI", level: 75 },
      ],
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Skills & Interests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem Solving",
              "Data Analysis",
              "Statistical Modeling",
              "Data Visualization",
              "Database Design",
              "Business Intelligence",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full border border-gray-200 hover:shadow-md transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
