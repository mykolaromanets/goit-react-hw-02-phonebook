import './Section-styled.css';

export const Section = ({ title, children }) => {
  return (
    <section className="Section__container">
      <h2 className="Section__title">{title}</h2>
      {children}
    </section>
  );
};
