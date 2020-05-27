import React from "react";
import PageTitle from "../../components/page-title/page-title.component";
import SettlersNamesOlim from "./settlers-names-olim/settlers-names-olim-component";
import SettlersNamesBorn from "./settlers-names-born/settlers-names-born.component";
import SettlersNamesPassedAway from "./settlers-names-passed-away/settlers-names-passed-away.component";
import SettlersNamesEvacuated from "./settlers-names-evacuated/settlers-names-evacuated.component";

class SettlersNames extends React.Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "שמות המתיישבים",
      olimList: [
        "צאירי דוד בן ישראל",
        "צאירי סעידה בת אברהם",
        "צאירי מרגלית דוד בן דוד",
        "צאירי שלמה בן דוד",
        "מרגלית יוסף בן דוד",
        "מרגלית לאה בת שלום ",
        "צאירי יוסף בן ישראל",
        "צאירי סעידה בת רצון",
        "צאירי מרגלית ישראל בן יוסף",
        "צאירי זכריה בן ישראל",
        "צאירי שולמית בת אברהם ",
        "צאירי סעדיה בן זכריה",
        "צאירי מרגלית רבקה לאה בת זכריה",
        "צאירי מנצור אסתר בת זכריה",
        "צאירי נחמה בת זכריה",
        "צאירי מרגלית יהודה בן דוד",
        "צאירי מרגלית אילה רחל גאזל בת יפת",
        "צאירי מרגלית מרים בת יהודה",
        "צאירי נתן בן יפת",
        "צאירי סעידה לאה בת יששכר",
        "צאירי סעדיה בן נתן",
        "צאירי רחל בת נתן",
        "צאירי נתן בן נתן",
        "צאירי דוד בן נתן",
        "צאירי חממה",
        "צאירי נדאף סעידה בת דוד וחממה",
        "צאירי חנה בת אברהם",
        "צאירי מרגלית אברהם בן דוד",
        "צאירי מרגלית רבקה בת סעדיה",
        "צאירי ישראל בן אברהם",
        "צאירי רחל בת אברהם",
        "מנצור חיים בן מנצור",
        "מנצור שמעה בת יפת",
        "מנצור משה בן חיים",
        "מנצור סלמה בת חיים",
        "מרגלית שרה זוהרה בת נתן",
        "מעודד יפת",
        "מעודה מרים בת מעודד",
        "נדאף שלום סאלם בן יחיא",
        "נדאף מלכה בת שלום",
        "נדאף שרה בת שלום",
        "צעירי יפת בן יוסף",
        "צאירי ישעיהו בן יוסף",
        "צאירי ימימה בת יפת "
      ],
      bornList: [
        {
          name: "מרגלית ברוך",
          father: "יהודה",
          year: "1916"
        },
        {
          name: "מרגלית חזקיה",
          father: "יהודה",
          year: "1919"
        },
        {
          name: "מרגלית פנינה",
          father: "יהודה",
          year: "1924"
        },
        {
          name: "מרגלית שולמית",
          father: "יהודה",
          year: "1922"
        },
        {
          name: "מרגלית ציפורה",
          father: "אברהם",
          year: "1920"
        },
        {
          name: "מרגלית רות",
          father: "אברהם",
          year: "1923"
        },
        {
          name: "מרגלית אביגיל",
          father: "יהודה",
          year: "1929"
        },
        {
          name: "מנצור (ללא שם)",
          father: "משה",
          year: "1925"
        },
        {
          name: "מנצור מלכה",
          father: "משה",
          year: "1926"
        },
        {
          name: "מנצור ידידה",
          father: "משה",
          year: "1929"
        },
        {
          name: "מנצור הדסה",
          father: "משה",
          year: "1930"
        },
        {
          name: "צאירי יעל",
          father: "הרב דוד",
          year: ""
        },
        {
          name: "צאירי שושנה",
          father: "הרב דוד",
          year: ""
        },
        {
          name: "מרגלית הדסה",
          father: "זכריה",
          year: ""
        },
        {
          name: "מרגלית אהובה תמר",
          father: "יוסף",
          year: "1929"
        },
        {
          name: "מרגלית שמואל",
          father: "דוד",
          year: ""
        },
        {
          name: "מרגלית ישראל",
          father: "דוד",
          year: ""
        },
        {
          name: "מרגלית רחל",
          father: "דוד",
          year: "1913"
        },
        {
          name: "מרגלית שולמית",
          father: "דוד",
          year: "1915"
        },
        {
          name: "מרגלית יהודה",
          father: "דוד",
          year: "1917"
        },
        {
          name: "מרגלית מרים",
          father: "דוד",
          year: "1925"
        },
        {
          name: "מרגלית זכריה",
          father: "דוד",
          year: "1924"
        },
        {
          name: "מרגלית שושנה",
          father: "ישראל",
          year: "1926"
        },
        {
          name: "מרגלית נתנאל",
          father: "ישראל",
          year: "1927"
        },
        {
          name: "מרגלית בת שבע",
          father: "ישראל",
          year: "1930"
        }
      ],
      passedAwayList: [
        {
          name: "מרגלית ישראל",
          father: "דוד"
        },
        {
          name: "מרגלית שמואל",
          father: "דוד"
        },
        {
          name: "מרגלית זכריה",
          father: "ישראל"
        },
        {
          name: "מרגלית פנינה",
          father: "יהודה"
        },
        {
          name: "צאירי הדסה",
          father: "זכריה"
        },
        {
          name: "צאירי ימימה",
          father: "יפת"
        },
        {
          name: "צאירי ישעיה",
          father: "יוסף"
        },
        {
          name: "צאירי יפת",
          father: "יוסף"
        },
        {
          name: "מעודד יפת",
          father: ""
        },
        {
          name: "מנצור (ללא שם)",
          father: "משה"
        },
        {
          name: "מנצור סלמה",
          father: "חיים"
        },
        {
          name: "מנצור שמעה",
          father: "יפת"
        },
        {
          name: "מנצור חיים",
          father: "מנצור"
        },
        {
          name: "צאירי סעידה",
          father: "רצון"
        },
        {
          name: "צאירי יוסף",
          father: "ישראל"
        },
        {
          name: "צאירי רחל",
          father: "אברהם"
        },
        {
          name: "צאירי ישראל",
          father: "אברהם"
        },
        {
          name: "צאירי נתן",
          father: "נתן"
        },
        {
          name: "מרגלית ברוך",
          father: "יהודה"
        },
        {
          name: "מרגלית רחל",
          father: "דוד"
        },
        {
          name: "מרגלית שולמית",
          father: "דוד"
        },
        {
          name: "מרגלית יהודה",
          father: "דוד"
        },
        {
          name: "צאירי שושנה",
          father: "דוד"
        },
        {
          name: "צאירי יעל",
          father: "דוד"
        },
        {
          name: "צאירי שלמה",
          father: "דוד"
        },
        {
          name: "צאירי סעידה-לאה",
          father: "יששכר"
        },
        {
          name: "צעירי נתן",
          father: "יפת"
        },
        {
          name: "צאירי שולמית",
          father: "אברהם"
        },
        {
          name: "צאירי סעדיה",
          father: "זכריה"
        },
        {
          name: "צאירי רבקה",
          father: "זכריה"
        },
        {
          name: "צאירי זכריה",
          father: "ישראל"
        }
      ],

      /** object.siblings MUST BE AN ARRAY because 
       we'll loop through it to cover objects with more than one sibling **/
      evacuatedList: [
        {
          name: "הרב דוד בן ישראל מרגלית - צאירי",
          imgSRC: require("../../assets/gallery/settlers/1.jpg"),
          siblings: [
            {
              name: "סעידה",
              relation: "אשתו"
            }
          ]
        },
        {
          name: "דוד בן דוד מרגלית",
          imgSRC: require("../../assets/gallery/settlers/2.jpg"),
          siblings: [
            {
              name: "זוהרה-שרה",
              relation: "אשתו"
            },
            {
              name: "מרים",
              relation: "בתו"
            }
          ]
        },
        {
          name: "יוסף בן דוד מרגלית",
          imgSRC: require("../../assets/gallery/settlers/3.jpg"),
          siblings: [
            {
              name: "לאה",
              relation: "אשתו"
            },
            {
              name: "אהובה",
              relation: "בתו"
            }
          ]
        },
        {
          name: "ישראל בן יוסף מרגלית",
          imgSRC: require("../../assets/gallery/settlers/4.jpg"),
          siblings: [
            {
              name: "רבקה",
              relation: "אשתו"
            },
            {
              name: "שושנה",
              relation: "בתו"
            },
            {
              name: "בת-שבע",
              relation: "בתו"
            },
            {
              name: "נתנאל",
              relation: "בנו"
            }
          ]
        },
        {
          name: "סאלם בן יחיא נדאף",
          imgSRC: require("../../assets/gallery/settlers/5.jpg"),
          siblings: [
            {
              name: "סעידה",
              relation: "אשתו"
            },
            {
              name: "חממה",
              relation: "חמותו"
            },
            {
              name: "מלכה",
              relation: "בתו"
            },
            {
              name: "שרה",
              relation: "בתו"
            }
          ]
        },
        {
          name: "דוד בן נתן צאירי",
          imgSRC: require("../../assets/gallery/settlers/6.jpg"),
          siblings: [
            {
              name: "חנה",
              relation: "אשתו"
            }
          ]
        },
        {
          name: "יהודה בן דוד מרגלית",
          imgSRC: require("../../assets/gallery/settlers/7.jpg"),
          siblings: [
            {
              name: "גאזל-אילה-רחל",
              relation: "אשתו"
            },
            {
              name: "חזקיה",
              relation: "בנו"
            },
            {
              name: "שולמית",
              relation: "בתו"
            }
          ]
        },
        {
          name: "סעדיה בן נתן וסעידה צעירי",
          imgSRC: require("../../assets/gallery/settlers/8.jpg"),
          siblings: [
            {
              name: "רחל",
              relation: `(עברה לפ"ת) אחותו`
            }
          ]
        },
        {
          name: "משה בן חיים מנצור",
          imgSRC: require("../../assets/gallery/settlers/9.jpg"),
          siblings: [
            {
              name: "אסתר",
              relation: "אשתו"
            },
            {
              name: "מלכה",
              relation: "בתו"
            },
            {
              name: "ידידה",
              relation: "בתו"
            },
            {
              name: "הדסה",
              relation: "בתו"
            }
          ]
        },
        {
          name: "אברהם בן דוד מרגלית",
          imgSRC: require("../../assets/gallery/settlers/10.jpg"),
          siblings: [
            {
              name: "רבקה",
              relation: "אשתו"
            },
            {
              name: "ציפורה",
              relation: "בתו"
            },
            {
              name: "רות",
              relation: "בתו"
            },
            {
              name: "אביגיל",
              relation: "בתו"
            }
          ]
        }
      ]
    };

    this.state.olimList.sort();
  }

  render() {
    return (
      <div>
        <PageTitle title={this.state.pageTitle} />

        {/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */}

        <div className="my-3">
          <h4 className="text-center my-3">עלו מתימן והתיישבו בכנרת</h4>

          {/** Came from Yemen and Settled In Kineret */}
          <SettlersNamesOlim namesOlim={this.state.olimList} />
        </div>

        {/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */}

        <div className="my-3">
          <h4 className="text-center my-3">נולדו בכנרת</h4>

          {/** Born In Kineret */}
          <SettlersNamesBorn namesBorn={this.state.bornList} />
        </div>

        {/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */}

        <div className="my-3">
          <h4 className="text-center my-3">נקברו באוהלו</h4>

          {/** Passed Away */}
          <SettlersNamesPassedAway
            namesPassedAway={this.state.passedAwayList}
          />
        </div>

        {/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */}

        <div className="my-3">
          <h4 className="text-center my-3">פונו לרחובות</h4>
          {/** Evacuated */}
          <SettlersNamesEvacuated namesEvacuated={this.state.evacuatedList} />
        </div>

        {/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */}
      </div>
    );
  }
}
export default SettlersNames;
