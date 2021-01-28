import flag1 from './cards/flag-albania.jpg';
import flag2 from './cards/flag-argentina.jpg';
import flag3 from './cards/flag-belgium.jpg';
import flag4 from './cards/flag-canada.jpg';
import flag5 from './cards/flag-czech-republic.jpg';
import flag6 from './cards/flag-egypt.jpg';
import flag7 from './cards/flag-georgia.jpg';
import flag8 from './cards/flag-great-britain.jpg';
import flag9 from './cards/flag-lebanon.jpg';
import flag10 from './cards/flag-mexico.jpg';
import flag11 from './cards/flag-switzerland.jpg';
import flag12 from './cards/flag-turkey.jpg';

import name1 from './cards/name-albania.png';
import name2 from './cards/name-argentina.png';
import name3 from './cards/name-belgium.png';
import name4 from './cards/name-canada.png';
import name5 from './cards/name-czech-republic.png';
import name6 from './cards/name-egypt.png';
import name7 from './cards/name-georgia.png';
import name8 from './cards/name-great-britain.png';
import name9 from './cards/name-lebanon.png';
import name10 from './cards/name-mexico.png';
import name11 from './cards/name-switzerland.png';
import name12 from './cards/name-turkey.png';

export interface IImage {
  key: string
  path: string
}

export type Images = IImage[];

export const flags:Images = [
  { key: 'albania', path: flag1 },
  { key: 'argentina', path: flag2 },
  { key: 'belgium', path: flag3 },
  { key: 'canada', path: flag4 },
  { key: 'czech-republic', path: flag5 },
  { key: 'egypt', path: flag6 },
  { key: 'georgia', path: flag7 },
  { key: 'great-britain', path: flag8 },
  { key: 'lebanon', path: flag9 },
  { key: 'mexico', path: flag10 },
  { key: 'switzerland', path: flag11 },
  { key: 'turkey', path: flag12 },
];

export const names:Images = [
  { key: 'albania', path: name1 },
  { key: 'argentina', path: name2 },
  { key: 'belgium', path: name3 },
  { key: 'canada', path: name4 },
  { key: 'czech-republic', path: name5 },
  { key: 'egypt', path: name6 },
  { key: 'georgia', path: name7 },
  { key: 'great-britain', path: name8 },
  { key: 'lebanon', path: name9 },
  { key: 'mexico', path: name10 },
  { key: 'switzerland', path: name11 },
  { key: 'turkey', path: name12 },
];
