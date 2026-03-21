import type { Degree as DegreeType } from '@/data/resume/degrees';

import Degree from './Education/Degree';

interface EducationProps {
  data: DegreeType[];
}

export default function Education({ data }: EducationProps) {
  return (
    <div className="education">
      <div className="link-to" id="education" />
      <div className="title">
        <h3>Education</h3>
      </div>
      {data.map((degree) => (
        <Degree data={degree} key={degree.school} />
      ))}
      <p style={{ marginTop: '1rem' }}>
        <a
          href="https://app.box.com/s/d6uk5xh583rpzdtd09whwhp35z73egg5"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW Unofficial Transcript (PDF)
        </a>
      </p>
    </div>
  );
}
