
import {Article1} from "./article1/article1.component";
import {Article2} from "./article2/article2.component";
import {Article3} from "./article3/article3.component";
import {Article4} from "./article4/article4.component";
import {Article5} from "./article5/article5.component";


const ArticlesArray = [
  {
    id: 1,
    title: `דקל רם צמרת | משה פרג`,
    subtitle: `במלאת מאה שנה להתיישבותם של "תימני כנרת"`,
    linkUrl: `articles/1`,
    content: Article1
  },
  {
    id: 2,
    title: `
      התנהגות פוליטית בישראל, סיפורם של "תימני כנרת" פונקציונליזם חברתי או קולוניאליזם אשכנזי?
  `,
    subtitle: `
      כתב: גיל מנצור, החוג למדע המדינה, אוניברסיטת ת"א
  `,
    linkUrl: `articles/2`,
    content: Article2
  },
  {
    id: 3,
    title: `גיל מנצור - סיפורו של שלט: הסיפור שלי`,
    subtitle: ``,
    linkUrl: `articles/3`,
    content: Article3
  },
  {
    id: 4,
    title: `המעבר לרחובות -`,
    subtitle: `מתוך: "מרמורק בת 60 סיפור של התחלה..."`,
    linkUrl: `articles/4`,
    content: Article4
  },
  {
    id: 5,
    title: `סיפורו של שלט`,
    subtitle: `מתוך: "ההיית או חלמתי חלום" סיפרו של פרופ' יהודה ניני`,
    linkUrl: `articles/5`,
    content: Article5
  }
];

export default ArticlesArray;
