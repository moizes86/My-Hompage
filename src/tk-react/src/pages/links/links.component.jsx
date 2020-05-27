import React from "react";
import PageTitle from "../../components/page-title/page-title.component";
import LinkItem from "./link-item/link-item.component";

class Links extends React.Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "קישורים",
      pageUrl: "/links",

      links: [
        {
          id: 1,
          title: `סיפורו של שלט - המאבק נגד הסרת השלט בבית המוטור`,
          linkUrl: "http://temaneikineret.org.il/K_dor_mavak.htm",
          target: `''`
        },
        {
          id: 2,
          title: `
          משה פרג - "דקל גבה צמרת"
          `,
          linkUrl: "http://temaneikineret.org.il/K_dor_moshe.htm",
          target: `''`
        },
        {
          id: 3,
          title: `
          גיל מנצור - סיפורו של שלט: הסיפור שלי
          `,
          linkUrl: "http://temaneikineret.org.il/K_dor_gilShelet.htm",
          target: `''`
        },
        {
          id: 4,
          title: `
            התנהגות פוליטית בישראל, סיפורם של "תימני כנרת" פונקציונליזם חברתי או קולוניאליזם אשכנזי?
          `,
          linkUrl: "http://temaneikineret.org.il/K_politit.htm",
          target: `''`
        },
        {
          id: 5,
          title: `
            "תימני כנרת" בויקיפדיה
          `,
          linkUrl:
            "https://he.wikipedia.org/wiki/%D7%AA%D7%99%D7%9E%D7%A0%D7%99_%D7%9B%D7%A0%D7%A8%D7%AA",
          target: `''`
        },
        {
          id: 6,
          title: `
          עיתון "הארץ": תימני כנרת מגורשים ברקמה מוזהבת
          `,
          linkUrl: "https://www.haaretz.co.il/.premium-1.3196510",
          target: `''`
        },
        {
          id: 7,
          title: `
          יוסי בן ארצי: 'הו כנרת של (מי)?'
          `,
          linkUrl:
            "http://www.ybz.org.il/_Uploads/dbsAttachedFiles/Article_88.7.pdf",
          target: `''`
        },
        {
          id: 8,
          title: `
          גור מלמד - פרשת תימני כנרת: הבניית הקונפליקט
          `,
          linkUrl:
            "http://web.archive.org/web/20130927070429/http://www.haskama.co.il/mediation/document/yaman.pdf",
          target: `''`
        },
        {
          id: 9,
          title: `
          "חיבורים וטיולים בישראל": סיור בעקבות תימני כנרת בכנרת
          `,
          linkUrl:
            "https://www.efitours.co.il/2016/10/23/%D7%AA%D7%99%D7%9E%D7%A0%D7%99-%D7%9B%D7%A0%D7%A8%D7%AA-%D7%91%D7%9B%D7%A0%D7%A8%D7%AA/",
          target: `''`
        }
      ]
    };
  }

  render() {
    return (
      <div className="links p-3 p-md-1">
        <PageTitle title={this.state.pageTitle} url={this.state.pageUrl} />
        <ul>
            {this.state.links.map(({ id, ...otherSectionProps }) => (
              <LinkItem key={id} {...otherSectionProps} />
            ))}
        </ul>
      </div>
    );
  }
}

export default Links;
