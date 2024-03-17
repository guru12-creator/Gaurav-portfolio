import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Education</h2>

      <section>
        <TestimonialCard
          name={"SSC"}
          // feedback={"Your Teaching skills are so good."}
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg047WVNGNPzk-8sKhxVkM-syfyVc9lEgkD6krVlAbRU0QTpscTUb9stIfEFP0E6SM0qA&usqp=CAU"}
           feedback ={"Upasana Lions School,Vapi"}
        />

        <TestimonialCard
          name={"HSC"}
          // feedback={
          //   "Wow what a portfolio, doesn't expected this to be on youtube!"
          // }
          src={"https://content3.jdmagicbox.com/comp/vapi/u5/9999px260.x260.150204153928.t5u5/catalogue/saraswat-international-academy-rata-vapi-english-medium-schools-f44vyhbvqu.jpg"}
           feedback={"Saraswat International Academy,Vapi"}
        />

        <TestimonialCard
        
          name={"B.E"}
          // feedback={"Amazing seems like you should the Google CEO"}
          src={"https://media.licdn.com/dms/image/C4E1BAQEwZrVnqDAsOw/company-background_10000/0/1584432820264/babaria_institute_vadodara_cover?e=2147483647&v=beta&t=eq3sFkHqI4oc5HeFm9rJL2DFNEBD5IjZtaUJ39tosoQ"}
          feedback ={"BITS edu campus, Vadodara"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback , src }) => (
  <article>
    <img
      // src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      src={src}
      
      alt="User"
    />
    <h2>{name}</h2> <br />
    <br />
    <br />
    {/* <p>{feedback}</p> */}
    <h3>{feedback}</h3>
  </article>
);

export default Testimonial;