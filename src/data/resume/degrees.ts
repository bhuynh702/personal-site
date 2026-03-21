export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'University of Maryland, Baltimore County',
    degree: 'B.S. Information Systems with Minor in Psychology',
    link: 'https://umbc.edu/',
    year: 2027,
  },
];

export default degrees;
