const Container = ({ children }) => {
  return (
    <div className="card mt-5" style={{ width: "50%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
