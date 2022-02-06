import React from 'react';
import { useSelector } from 'react-redux';
import { Founders } from '../cmps/home_page/Founders';
import { Subscribe } from '../cmps/home_page/Subscribe';

export const AboutPage = () => {
    const { persons } = useSelector(({ entities }) => entities.communityHeartModule);
    return (
        <div className='about-page full'>
            <div className='about-page-wrapper main-layout'>
                <h1 className='title flex'>קצת עלינו</h1>
                <p className='about-content'>האם חשבתם פעם לעצמכם מה עוד אנחנו יכולים לעשות <br />
                    כדי להתקבל לעבודה הראשונה שלנו בהייטק?<br />
                    מה אנשים אחרים עושים שאני לא?<br />
                    האם תהיתם למה אין לכם מספיק כלים<br />
                    למצוא את מקומכם גם לאחר תואר/קןרסים/לימוד עצמי?<br />
                    ובכן, הגעתם למקום הנכון!</p>
                <h4>ברוכים הבאים לאתר הרשמי של קהילת "כולא_לייק"!</h4>
                <p className='about-content'>פרויקט זה הוקם על ידי עדי פורת במאי 2020,<br />
                    ומטרתו הייתה לפתור את פרדוקס הג'וניור<br />
                    (חוסר היכולת להתחיל לצבור נסיון עבודה במשרות התחלתיות,<br />
                    כשהדרישות אליהן דורשות נסיון עבודה)באמצעות יצירת הנכוןאנושי שהמנוע בו הוא ערבות הדדית.<br />
                </p>
                <h4>אז מה אנחנו עושים?</h4>
                <p className='about-content-wrapper flex column'>
                    <span className='about-content dashes'>- פתחנו את אקדמיית "הפניקס", בניהולו של שמעון מויאל,<br />
                        בה יש מגוון רחב של הרצאות מבכירי התעשייה, המקנות כלים פרקטיים<br />
                        למציאת עבודה ראשונה.</span>
                    <span className='about-content dashes'>- הקמנו שני האקתונים (אירועי יזמות אינטנסיביים) לחברי הקהילה,<br />
                        כאשר הזוכים בה, קיבלו נסיון מעשי, ליווי מקצועי, ורובם השתלבו תוך<br />
                        זמן קצר בחברות מובילות.<br />
                    </span>
                    <span className='about-content dashes last'>- קרוב ל9000 חברי הקהילה מקבלים סיוע<br />
                        ותמיכה מחברי הקהילה.<br />
                    </span>
                    <span className='about-content'>הקהילה שלנו משמשת כמרחב בטוח אויכותי לכל אחד ואחת מכם.<br />
                        נשמח שתצטרפו אלינו, ותכירו את כוחו של הלייק האחד,<br />
                        שיהיה הפתרון של פרדוקס הג'וניור לאלפי אנשים.</span>
                </p>
                <div className='founders-comp full'>
                    <div className='founders-component main-layout'>
                        <Founders persons={persons} />
                    </div>
                </div>
                <div className="subscribe-comp full">
                    <div className="main-layout">
                        <Subscribe />
                    </div>
                </div>
            </div>
        </div>)
}
