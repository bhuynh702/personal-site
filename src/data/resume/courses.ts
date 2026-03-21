export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Calculus II',
    number: 'MATH 152',
    link: '',
    university: 'UMBC',
  },
  {
    title: 'Python',
    number: 'CMSC 201',
    link: '',
    university: 'UMBC',
  },
  {
    title: 'C++',
    number: 'CMSC 202',
    link: '',
    university: 'UMBC',
  },
  {
    title: 'Applied Finite Mathematics',
    number: 'MATH 215',
    link: '',
    university: 'UMBC',
  },
  {
    title: 'Foundations of Data Science (Python)',
    number: 'IS 296',
    link: '',
    university: 'UMBC',
  },
  {
    title: 'Introduction to Database Design (SQL)',
    number: 'IS 410',
    link: '',
    university: 'UMBC',
  },
  {
    title: 'Technical Writing',
    number: 'ENGL 393',
    link: '',
    university: 'UMBC',
  },
];

export default courses;
