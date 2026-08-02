function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
          }}
        >
          Oğuzhan Yılmaz
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
          }}
        >
          Backend Developer • Computer Engineer
        </p>
      </div>
    </section>
  );
}

export default Hero;