function Slide(Props) {
  const {id, title, desc} = Props;
  return (
    <div className="slide-container" data-cy="slide">
      <h3 data-cy="title">{title}</h3>
      <p data-cy="description">{desc}</p>
      
    </div>
  );
}

export default Slide;
