import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "Alice Johnson", comment: "This website made everything so easy and fast. I love the design!" },
  { name: "Mark Robinson", comment: "Super user-friendly and smooth experience. Highly recommended!" },
  { name: "Sara Patel", comment: "Excellent customer support and clean layout. Five stars!" },
  { name: "David Kim", comment: "I've tried many sites, but this one is the most intuitive." },
  { name: "Emma Williams", comment: "Everything just works. Beautiful and efficient!" },
  { name: "Liam Garcia", comment: "Simple, elegant, and powerful. I use it every day." },
  { name: "Olivia Brown", comment: "This site exceeded my expectations. Great job!" },
  { name: "Noah Smith", comment: "From sign-up to usage, the process was seamless and enjoyable." },
];

const TestimonialCard = React.forwardRef(({ name, comment }, ref) => (
  <div
    ref={ref}
    style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      margin: "10px",
      width: "250px",
    }}
  >
    <p style={{ fontStyle: "italic" }}>"{comment}"</p>
    <h4 style={{ marginTop: "10px", color: "#333" }}>- {name}</h4>
  </div>
));

const TestimonialsSection = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const fromX = index % 2 === 0 ? -100 : 100; // Alternate left and right
      gsap.fromTo(
        card,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "restart none none none",
          },
        }
      );
    });
  }, []);

  return (
   <div className='mt-40 mb-20'>

      <h1 className='text-3xl font-semibold underline text-amber-600 text-center mb-10'>
      Our  User's review 
      </h1>

    <div className='bg-[#f9dc9f] border-none rounded-2xl' style={{ display: "flex",flexWrap: "wrap",justifyContent: "center",gap: "20px",padding: "40px"}}>

        
      {testimonials.map((t, index) => (
        <TestimonialCard 
          key={index} name={t.name} comment={t.comment} ref={el => (cardRefs.current[index] = el)}
        />
      ))}
    </div>
    </div>
  );
};

export default TestimonialsSection;
