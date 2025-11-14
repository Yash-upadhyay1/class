function Card({ title, description }) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
