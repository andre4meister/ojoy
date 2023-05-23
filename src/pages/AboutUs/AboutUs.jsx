import styles from './AboutUs.module.scss';
import SupportBanner from '../../components/SupportBanner/SupportBanner';
import aboutImage from '../../assets/images/about-us.png';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.about}>
          <div className={styles.about__image}>
            <img src={aboutImage} alt='us' />
          </div>
          <div className={styles.about__info}>
            <h2>Про нас</h2>
            <p>Ми також обожнюємо аніме. Ще в далекому 2012 ми мріяли, щоб аніме озвучувались нашою рідною мовою, проте
              майже ніхто цього не робив на професійному рівні. Тому приходилось дивитись зі субтитрами, адже російську ми
              не сприймали і як виявилось, не дарма! Пройшли роки, але мрія переросла в реальність і ми створили власну
              студію з професійними людьми, які горять створювати україномовний контент! Наша головне ціль - поширювати та
              розвивати цей напрямок.
            </p>
            <p>Студія Ojoy володіє командою талановитих та досвідчених озвучувальників, які працюють з дбайливою увагою до
              деталей та якості. Ми віддані своїй мистецькій справі та прагнуть забезпечити найкращий можливий переклад та
              озвучення аніме-серіалів для українських глядачів. Одним з ключових принципів роботи Ojoy є збереження
              аутентичності та оригінального духу анімаційного контенту. Вони ретельно підбирають акторів голосу, щоб
              кожен персонаж звучав вірно до своєї оригінальної концепції та особливостей. Це допомагає українським
              глядачам насолоджуватися аніме в улюбленій мові, зберігаючи суть та емоції, що передається оригінальними
              виконавцями.
            </p>
          </div>
        </div>
      </div>
      <SupportBanner />
    </div>
  );
};

export default AboutUs;