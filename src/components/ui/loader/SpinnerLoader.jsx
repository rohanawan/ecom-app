const SpinnerLoader = () => {
  return (
    <div style={styles.container}>
      <span className="mr-2 pr-2 px-2">Loading...</span>
      <div>
        <div className="spinner-border" role="status"></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    gap: "0.5rem",
  },
};

export default SpinnerLoader;
