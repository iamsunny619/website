import React from "react";

const Error = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f8f8f8",
    },
    heading: {
      fontSize: "2em",
      color: "#333",
      marginBottom: "20px",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
    },
    message: {
      fontSize: "1.2em",
      color: "#666",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <img
        src="https://your-404-image-url.jpg"
        alt="Page not found"
        style={styles.image}
      />
      <p style={styles.message}>
        Sorry, the page you are looking for might be in another castle.
      </p>
    </div>
  );
};

export default Error;
