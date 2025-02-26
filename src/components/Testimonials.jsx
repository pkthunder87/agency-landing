import Testimony from "./Testimony";

const testimonials = [
  {
    num: "1",
    name: "Emily R.",
    imgPro: "./assets/images/image-emily.jpg",
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    job: "Marketing Director",
  },
  {
    num: "2",
    name: "Thomas S.",
    imgPro: "./assets/images/image-thomas.jpg",
    text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    job: "Chief Operating Officer",
  },
  {
    num: "3",
    name: "Jennie F.",
    imgPro: "./assets/images/image-jennie.jpg",
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    job: "Business Owner",
  },
];

function Testimonials() {
  return (
    <section className="agency__tests">
      <h2 className="tests__title serifs">Client Testimonials</h2>
      <ul className="tests__list">
        {testimonials.map((person) => (
          <Testimony
            num={person.num}
            key={person.imgPro}
            imgPro={person.imgPro}
            name={person.name}
            text={person.text}
            job={person.job}
          />
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;
