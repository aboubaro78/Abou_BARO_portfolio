// ──────────────────────────────────────────────────────────
//  CV data — Abou Birane BARO
// ──────────────────────────────────────────────────────────

export const person = {
  name: 'Abou Birane BARO',
  firstName: 'Abou Birane',
  lastName: 'BARO',
  title: 'Data Scientist | Machine Learning Engineer | Applied AI',
  shortTitle: 'Data Scientist & ML Engineer',
  location: 'Dakar, Senegal',
  email: 'aboubiraneb@gmail.com',
  phone: '(+221) 78 230 49 88',
  linkedin: 'https://www.linkedin.com/in/abou-birane-baro',
  github: 'https://github.com/aboubaro78',
  portfolio: 'https://crop-recommendation-app-x89l.onrender.com/',
  photo: '/IMG-20250309-WA0169(1).jpg',
  heroImage: 'https://images.pexels.com/photos/17483867/pexels-photo-17483867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  summary:
    'Data Scientist with a strong background in Applied Mathematics, Machine Learning, Artificial Intelligence and Optimization. Experienced in predictive modeling, Bayesian statistics, spatial analysis, energy systems and decision-support tools. Passionate about building intelligent solutions that transform data into actionable insights in agriculture, public health, climate and energy.',
};

export const about = {
  bio: [
    'I am a Data Scientist and Machine Learning Engineer with roots in Applied Mathematics, based in Dakar, Senegal. My academic journey — from a Bachelor\'s in Mathematics & Computer Science to an M.Sc. in Mathematical Sciences (Big Data) at AIMS Senegal — has given me a rigorous quantitative foundation that I apply directly to real-world problems.',
    'I specialize at the intersection of statistical modeling, machine learning and optimization. Whether designing Bayesian spatial models to map epidemiological risk, building energy market optimization algorithms, or deploying AI-powered recommendation systems, my focus is always on turning complex data into decisions that matter.',
    'My mission is to contribute intelligent, data-driven solutions to some of Africa\'s most pressing challenges — in agriculture, public health, climate resilience and energy access. I bring both the mathematical depth to model hard problems and the engineering ability to ship production-ready systems.',
  ],
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Optimization',
    'Spatial Statistics',
    'Bayesian Modeling',
    'Smart Agriculture',
    'Climate Analytics',
    'Energy Systems',
  ],
  languages: [
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Professional' },
    { name: 'Wolof', level: 'Native' },
    { name: 'Pulaar', level: 'Native' },
  ],
};

export type SkillCategory = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    icon: 'code',
    skills: ['Python', 'R', 'SQL', 'MATLAB', 'LaTeX'],
  },
  {
    category: 'Machine Learning',
    icon: 'brain',
    skills: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Random Forest', 'SVM'],
  },
  {
    category: 'Data Analysis & Visualization',
    icon: 'bar-chart',
    skills: ['Pandas', 'NumPy', 'Power BI', 'Tableau', 'Plotly', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Statistics',
    icon: 'trending-up',
    skills: ['Bayesian Statistics', 'INLA', 'SPDE', 'Time Series Analysis', 'Regression'],
  },
  {
    category: 'Optimization',
    icon: 'settings',
    skills: ['Linear Programming', 'PuLP', 'Operations Research', 'Economic Dispatch'],
  },
  {
    category: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Development Tools',
    icon: 'tool',
    skills: ['Git', 'GitHub', 'Gradio', 'Render', 'Docker (Basics)'],
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  type: 'professional' | 'research';
  location: string;
  dates: string;
  responsibilities: string[];
  logo?: string;
};

export const experiences: Experience[] = [
  {
    id: 'senelec',
    type: 'professional',
    company: 'SENELEC',
    role: 'Data Analyst Intern',
    location: 'Dakar, Senegal',
    dates: 'Jul. 2025 – Dec. 2025',
    responsibilities: [
      'Designed and implemented a day-ahead electricity market optimization model for the West African Power Pool (WAPP).',
      'Developed optimization algorithms using Python and PuLP to minimize electricity generation costs.',
      'Simulated cross-border electricity exchanges under different market scenarios.',
      'Built interactive dashboards for market monitoring and decision support using Plotly and Matplotlib.',
      'Produced mathematical formulations and technical reports for electricity market optimization.',
    ],
  },
  {
    id: 'aims',
    type: 'research',
    company: 'African Institute for Mathematical Sciences (AIMS Senegal)',
    role: 'Bayesian Spatial Modeling Research',
    location: 'Mbour, Senegal',
    dates: '2025 – 2026',
    responsibilities: [
      'Conducted Bayesian spatial and spatio-temporal modeling of human rabies mortality in Tanzania.',
      'Developed hierarchical statistical models using the INLA-SPDE framework.',
      'Compared Negative Binomial and Zero-Inflated models for highly sparse epidemiological data.',
      'Produced risk maps and identified high-risk wards for public health decision-making.',
      'Performed exploratory data analysis, spatial visualization and statistical reporting using R.',
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  context: string;
  objective: string;
  technologies: string[];
  contributions: string[];
  results: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'crop-rec',
    title: 'AI-Powered Crop Recommendation System',
    context: 'Smart agriculture initiative for West African farmers needing data-driven crop selection guidance.',
    objective: 'Build and deploy a machine learning system that recommends the most suitable crop based on soil composition, climate conditions and geographic data.',
    technologies: ['Python', 'Scikit-Learn', 'Gradio', 'Render', 'Pandas', 'NumPy'],
    contributions: [
      'Designed and trained a multi-class classification model on agricultural datasets.',
      'Built an interactive Gradio web interface for real-time predictions.',
      'Deployed the full application on Render for public access.',
      'Integrated soil nutrient and climate features for robust inference.',
    ],
    results: 'Developed and deployed a fully functional AI-powered application accessible online, enabling farmers to receive instant, data-driven crop recommendations.',
    image: 'https://images.pexels.com/photos/29277511/pexels-photo-29277511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    demoUrl: 'https://crop-recommendation-app-x89l.onrender.com/',
    githubUrl: 'https://github.com/aboubaro78',
  },
  {
    id: 'wapp',
    title: 'WAPP Electricity Market Optimization',
    context: 'SENELEC internship project addressing electricity market design challenges for the West African Power Pool.',
    objective: 'Model and optimize day-ahead electricity dispatch to minimize generation costs while ensuring grid reliability and enabling cross-border energy trading.',
    technologies: ['Python', 'PuLP', 'Plotly', 'Matplotlib', 'Linear Programming', 'Operations Research'],
    contributions: [
      'Formulated the mathematical optimization model for day-ahead electricity market clearing.',
      'Implemented the solver using PuLP to dispatch generation units at minimum cost.',
      'Simulated multiple cross-border exchange scenarios under varying demand conditions.',
      'Built interactive dashboards for real-time market monitoring and stakeholder reporting.',
      'Produced detailed technical documentation and mathematical formulations.',
    ],
    results: 'Result to be completed.',
    image: 'https://images.pexels.com/photos/9969371/pexels-photo-9969371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'rabies',
    title: 'Bayesian Spatial Modeling of Rabies Mortality',
    context: 'Public health research project addressing human rabies mortality risk in Tanzania using advanced spatial statistics.',
    objective: 'Model the spatial and spatio-temporal distribution of human rabies deaths across Tanzanian wards to identify high-risk zones and inform public health interventions.',
    technologies: ['R', 'INLA', 'SPDE', 'Bayesian Statistics', 'Spatial Analysis', 'Negative Binomial', 'Zero-Inflated Models'],
    contributions: [
      'Developed hierarchical Bayesian spatial models under the INLA-SPDE framework.',
      'Compared Negative Binomial and Zero-Inflated count models for sparse epidemiological data.',
      'Produced high-resolution spatial risk maps of rabies mortality across Tanzanian wards.',
      'Identified high-risk zones to guide targeted public health decision-making.',
      'Conducted thorough exploratory data analysis and spatial visualization using R.',
    ],
    results: 'Result to be completed.',
    image: 'https://images.pexels.com/photos/4021266/pexels-photo-4021266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type Education = {
  institution: string;
  degree: string;
  field: string;
  location: string;
  dates: string;
  description: string;
};

export const education: Education[] = [
  {
    institution: 'African Institute for Mathematical Sciences (AIMS Senegal)',
    degree: 'M.Sc.',
    field: 'Mathematical Sciences (Big Data)',
    location: 'Mbour, Senegal',
    dates: '2024 – 2026',
    description:
      'Specialization in Data Science, Artificial Intelligence, Machine Learning, Optimization and Statistical Modeling. A rigorous STEM graduate program training world-class African scientists.',
  },
  {
    institution: 'Université Iba Der Thiam',
    degree: "Master's Degree",
    field: 'Applied Mathematics',
    location: 'Thiès, Senegal',
    dates: '2021 – 2024',
    description:
      'Research focused on Hamilton–Jacobi equations and Mathematical Morphology. Developed strong theoretical foundations in analysis, PDEs and applied mathematics.',
  },
  {
    institution: 'Université Iba Der Thiam',
    degree: "Bachelor's Degree",
    field: 'Mathematics and Computer Science',
    location: 'Thiès, Senegal',
    dates: '2018 – 2021',
    description:
      'Solid grounding in pure and applied mathematics, algorithms, programming and computer science fundamentals.',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  verificationUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: 'Power BI & Artificial Intelligence',
    issuer: 'AfriAI Solutions',
    year: '2026',
  },
  {
    name: 'NetCDF Data Processing — Climate Data Analysis using Python',
    issuer: 'NetCDF Data Processing',
    year: '2025',
  },
  {
    name: 'INLA-SPDE Framework — Bayesian Spatial Modeling',
    issuer: 'INLA-SPDE Framework',
    year: '2025',
  },
];
