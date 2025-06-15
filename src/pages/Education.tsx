
const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "ABC University",
      location: "Chennai, India",
      year: "2020 - 2024",
      grade: "CGPA: 8.5/10",
      description: "Specialized in software engineering, algorithms, and data structures. Completed capstone project on web application development.",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Best Project Award for final year project",
        "Active member of Computer Science Society",
      ],
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "XYZ Higher Secondary School",
      location: "Chennai, India",
      year: "2018 - 2020",
      grade: "Percentage: 92%",
      description: "Science stream with Computer Science, Mathematics, and Physics. Strong foundation in programming and analytical thinking.",
      achievements: [
        "School topper in Computer Science",
        "Participated in state-level coding competitions",
        "Led the school programming club",
      ],
    },
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      provider: "Coursera",
      year: "2023",
      description: "Comprehensive course covering MERN stack development",
    },
    {
      name: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      year: "2023",
      description: "Cloud computing fundamentals and AWS services",
    },
    {
      name: "React Developer Certification",
      provider: "Meta",
      year: "2022",
      description: "Advanced React concepts and best practices",
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Academic Background</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-600 mb-2">{edu.location}</p>
                    <p className="text-gray-500">{edu.year}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <span className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-gray-700 px-4 py-2 rounded-full font-semibold">
                      {edu.grade}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{cert.provider}</p>
                  <p className="text-gray-500 text-sm mb-4">{cert.year}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
