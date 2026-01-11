import React, { useState } from 'react';
// Added FileText to imports for the resume icon
import { Mail, Linkedin, Github, ExternalLink, Briefcase, GraduationCap, Award, Code, FileText } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = ['about', 'education', 'experience', 'projects', 'skills', 'achievements'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">MKT</h1>
            <div className="flex gap-4">
              {sections.map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 py-2 rounded-lg transition-all capitalize ${
                    activeSection === section
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Mohan Krishna Thiriveedhi
            </h1>
            <p className="text-xl text-purple-300 mb-6">
              Software Engineer | ML Enthusiast | Graduate Teaching Assistant
            </p>

            {/* CONTACT BUTTONS */}
            <div className="flex flex-col md:flex-row justify-center gap-4 items-center flex-wrap">
              {/* Email Button */}
              <a
                href="mailto:mohankrishnathiriveedhi27@gmail.com"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all w-full md:w-auto h-auto min-h-[44px]"
              >
                <Mail size={20} className="flex-shrink-0" />
                <span className="break-all text-sm md:text-base">mohankrishnathiriveedhi27@gmail.com</span>
              </a>

              <div className="flex gap-4 w-full md:w-auto justify-center flex-wrap">
                <a
                  href="https://linkedin.com/in/mohan-krishna-thiriveedhi-335255214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all flex-1 md:flex-none"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="tel:+14048195786"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all flex-1 md:flex-none"
                >
                  +1 (404) 819-5786
                </a>

                {/* NEW RESUME BUTTON */}
                {/* Ensure resume.pdf is in your public folder */}
                <a
                  href="/resume.pdf"
                  download="Mohan_Krishna_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all flex-1 md:flex-none"
                >
                  <FileText size={20} />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-purple-500/20">
            {activeSection === 'about' && (
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Code className="text-purple-400" />
                  About Me
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a passionate Computer Science graduate student at Kennesaw State University with a perfect 4.0 GPA,
                  currently working as a Graduate Teaching Assistant. With professional experience at Tata Consultancy Services
                  and expertise in machine learning, data analytics, and software development, I bring a unique blend of
                  technical skills and teaching abilities.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My work spans from developing AI-powered diagnostic systems with 99-100% accuracy to building scalable
                  cybersecurity solutions processing millions of records. I'm passionate about leveraging cutting-edge
                  technologies like deep learning, distributed computing, and data visualization to solve real-world problems.
                </p>
              </div>
            )}

            {activeSection === 'education' && (
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <GraduationCap className="text-purple-400" />
                  Education
                </h2>
                <div className="space-y-6">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-semibold text-purple-300">Kennesaw State University</h3>
                      <span className="text-gray-400">Aug 2024 - May 2026</span>
                    </div>
                    <p className="text-xl text-gray-300 mb-2">Master of Science in Computer Science</p>
                    <p className="text-lg text-green-400 font-semibold">CGPA: 4.0/4.0</p>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-semibold text-purple-300">RVR & JC College Of Engineering</h3>
                      <span className="text-gray-400">Aug 2019 - June 2023</span>
                    </div>
                    <p className="text-xl text-gray-300 mb-2">Bachelor of Technology in Computer Science</p>
                    <p className="text-lg text-green-400 font-semibold">CGPA: 9.21/10</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="text-purple-400" />
                  Experience
                </h2>
                <div className="space-y-6">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-purple-300">Graduate Teaching Assistant</h3>
                        <p className="text-lg text-gray-300">Kennesaw State University</p>
                      </div>
                      <span className="text-gray-400">Jan 2025 – Present</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Teaching Python, Java and C# to undergraduate students through in-person labs</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Grade lab assignments and projects while offering constructive feedback to support learning progress</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Support over 100 students per semester in building strong programming foundations and problem-solving skills</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-purple-300">Software Engineer - Full Time</h3>
                        <p className="text-lg text-gray-300">Tata Consultancy Services</p>
                      </div>
                      <span className="text-gray-400">June 2023 – July 2024</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Developed 10+ interactive Power BI reports to monitor KPIs for Tata Steel Project, improving decision-making processes</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Optimized SQL data models and Power BI dashboards, cutting refresh times by 30%</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Ensured data accuracy and integrity in Power BI reports through thorough testing and validation processes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-purple-300">SDET - Internship</h3>
                        <p className="text-lg text-gray-300">Peoplehum Technologies Private Limited</p>
                      </div>
                      <span className="text-gray-400">Jan 2023 – June 2023</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Automated over 150 test scenarios for iOS and web applications using Selenium and Java</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Increased iOS automation test coverage from 30% to 95%, validating critical user workflows</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Performed API load testing with JMeter to ensure scalable data transfer across REST services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Github className="text-purple-400" />
                  Projects
                </h2>
                <div className="space-y-6">

                  {/* PROJECT 1 */}
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3 gap-2">
                      <a
                        href="https://github.com/MohanKrishna27062001/AI-assisted-Diabetic-Retinopathy-Screening"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <h3 className="text-2xl font-semibold text-purple-300 group-hover:text-purple-200 transition-colors flex items-center gap-2">
                          AI-assisted Diabetic Retinopathy Screening
                          <ExternalLink size={20} className="inline opacity-50 group-hover:opacity-100" />
                        </h3>
                      </a>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">Python, PyTorch, PyCharm, HuggingFace</p>
                    <ul className="space-y-2 text-gray-300 mb-4">
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Developed deep learning system achieving 99-100% accuracy for severe diabetic retinopathy classification using ResNet-50, EfficientNet-B0, and ViT on 976-image APTOS dataset</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Engineered automated screening pipeline with CLAHE preprocessing and augmentation, achieving perfect AUC (1.0) and F1-scores across 3 architectures in 6 epochs</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Implemented Grad-CAM explainability across 3 deep learning architectures to validate pathological region learning</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Developed Flask web application in Hugging Face with real-time image upload and prediction interface</span>
                      </li>
                    </ul>
                    <a
                      href="https://github.com/MohanKrishna27062001/AI-assisted-Diabetic-Retinopathy-Screening"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github size={16} />
                      View Code on GitHub
                    </a>
                  </div>

                  {/* PROJECT 2 */}
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3 gap-2">
                      <a
                         href="https://github.com/MohanKrishna27062001/-Large-Scale-Cybersecurity-Threat-Detection"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="group"
                      >
                        <h3 className="text-2xl font-semibold text-purple-300 group-hover:text-purple-200 transition-colors flex items-center gap-2">
                          Large-Scale Cybersecurity Threat Detection
                          <ExternalLink size={20} className="inline opacity-50 group-hover:opacity-100" />
                        </h3>
                      </a>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">Python, PySpark, VS Code</p>
                    <ul className="space-y-2 text-gray-300 mb-4">
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Designed a scalable intrusion detection system using PySpark and machine learning models on the UNSW-NB15 dataset, achieving approximately 98% accuracy</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Applied Principal Component Analysis to reduce features by 49%, resulting in a 40% improvement in training speed without accuracy loss</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Processed over 2.5 million network traffic records using distributed computing, enabling real-time cybersecurity threat detection</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Integrated Quantum Machine Learning to improve classification accuracy for complex cyberattack scenarios</span>
                      </li>
                    </ul>
                    <a
                      href="https://github.com/MohanKrishna27062001/-Large-Scale-Cybersecurity-Threat-Detection"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github size={16} />
                      View Code on GitHub
                    </a>
                  </div>

                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Code className="text-purple-400" />
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Java', 'C++', 'SQL', 'HTML', 'CSS'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4">Machine Learning & AI</h3>
                    <div className="flex flex-wrap gap-2">
                      {['TensorFlow', 'PyTorch', 'Machine Learning', 'Image Processing'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4">Data & Analytics</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Power BI', 'Hadoop', 'Spark', 'PySpark'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4">Tools & Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Selenium', 'Flask', 'Data Structures'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'achievements' && (
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Award className="text-purple-400" />
                  Achievements
                </h2>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20 flex items-start gap-4">
                    <Award className="text-yellow-400 flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold text-purple-300 mb-2">TCS Codevita Season 10</h3>
                      <p className="text-gray-300">Secured 2998 Global Rank in competitive coding competition</p>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20 flex items-start gap-4">
                    <Award className="text-yellow-400 flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold text-purple-300 mb-2">LeetCode Recognition</h3>
                      <p className="text-gray-300">Top SQL 50 Badge - Demonstrating strong database query skills</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>© 2026 Mohan Krishna Thiriveedhi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;