/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'EMS Database - SQL Project',
    position: '',
    url: 'https://github.com/bhuynh702/other_projects/blob/main/IS410_Deliverable_Presentation.pdf',
    startDate: '2025-10-01',
    endDate: '2025-12-01',
    highlights: [
      'Designed and implemented a relational EMS database using Oracle SQL, modeling real-world emergency workflows with normalized tables and ER diagrams',
      'Developed complex SQL queries (JOINs, aggregations, updates) to analyze patient data, incidents, and hospital transport patterns',
      'Ensured data integrity through primary/foreign keys and constraints while collaborating on a scalable, real-world database solution'
    ],
  },
  {
    name: 'Career and Lifestyle Analysis - Data Science Project',
    position: '',
    url: 'https://www.youtube.com/watch?v=d4F5SHEHQSY',
    startDate: '2025-04-01',
    endDate: '2025-05-01',
    summary: `<a href='https://github.com/bhuynh702/datascience_projects/tree/58c9307e9b045b89452d92a2bffe1307f877380a/Career_and_Lifestyle_Analysis'>LINK to PROJECT FOLDER in Github</a>`,
    highlights: [
      'Analyzed a dataset of 374 individuals including variables such as gender, age, occupation, sleep quality, physical activity, stress levels, and blood pressure',
      'Performed exploratory data analysis using bar charts, histograms, scatter plots, and a permutation test to evaluate relationships between variables',
      'Interpreted results to distinguish correlation versus statistical association',
      'Presented findings through a Google Slides presentation with recorded voiceover; collaborated with one partner over a 4-week project timeline'
    ],
  },
  {
    name: 'Personal Informatics - Data Science Project',
    position: '',
    url: 'https://github.com/bhuynh702/datascience_projects/blob/708ae5113db366f2a323a1b70d67d64183a36e59/Personal_Informatics/PI_Analysis.ipynb',
    startDate: '2025-02-01',
    endDate: '2025-03-01',
    summary: `<a href='https://github.com/bhuynh702/datascience_projects/tree/708ae5113db366f2a323a1b70d67d64183a36e59/Personal_Informatics'>LINK to PROJECT FOLDER in Github</a>`,
    highlights: [
      'Collected and tracked 5 weeks of personal behavioral data in a spreadsheet, including day of week, exercise minutes, study time, reading time, sleep duration, and self-reported energy levels',
      'Analyzed data using Python and NumPy to create tables, scatter plots, bar charts, and histograms to identify trends and correlations',  
      'Recorded weekly reflections in a Google Slides presentation'
    ],
  },
  {
    name: 'C++ Computer Science Projects',
    position: '',
    url: 'https://github.com/bhuynh702/cpp_projects/tree/14dab497019a34f7231b607fa238dd24c849f0ab/Projects',
    startDate: '2024-01-01',
    endDate: '2024-05-01',
    summary: `<a href='https://github.com/bhuynh702/cpp_projects/tree/14dab497019a34f7231b607fa238dd24c849f0ab/Projects'>LINK to PROJECT FOLDER in Github</a>`,
    highlights: [
      'Completed 5 C++ programming projects in 2-week development cycles, applying object-oriented programming concepts including pointers, classes, constructors, linked lists, inheritance, polymorphism, and recursion.',
      'Demonstrated persistence and problem-solving skills.'
    ],
  },
  {
    name: 'Python Computer Science Projects',
    position: '',
    url: 'https://github.com/bhuynh702/python_projects',
    startDate: '2023-09-01',
    endDate: '2023-12-01',
    summary: `<a href='https://github.com/bhuynh702/python_projects/tree/a36c7848ca9803fd27667ce15e433f7a22a9eb84/Projects'>LINK to PROJECT FOLDER in Github</a>`,
    highlights: [
      'Completed 3 Python programming projects and 6 homework assignments over the semester, applying core programming concepts including lists, loops, conditionals, functions, recursion, and two-dimensional arrays',
      'Strengthened problem-solving and debugging skills through 10+ hours per week of instructor/TA office hours improving code logic, accuracy, and efficiency',
    ],
  },
];

export default work;
