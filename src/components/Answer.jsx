import React from "react";

function Answer() {
  return (
    <div>
      <h2>Answer Table</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={styles.th}>Question Number</th>
            <th style={styles.th}>HTML</th>
            <th style={styles.th}>CSS</th>
            <th style={styles.th}>JS</th>
            <th style={styles.th}>React</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>1</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>3</td>
            <td style={styles.td}>2</td>
            <td style={styles.td}>1</td>
          </tr>
          <tr>
            <td style={styles.td}>2</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>2</td>
            <td style={styles.td}>3</td>
          </tr>
          <tr>
            <td style={styles.td}>3</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>2</td>
            <td style={styles.td}>3</td>
            <td style={styles.td}>1</td>
          </tr>
          <tr>
            <td style={styles.td}>4</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>2</td>
            <td style={styles.td}>4</td>
          </tr>
          <tr>
            <td style={styles.td}>5</td>
            <td style={styles.td}>2</td>
            <td style={styles.td}>2</td>
            <td style={styles.td}>4</td>
            <td style={styles.td}>2</td>
          </tr>
          <tr>
            <td style={styles.td}>6</td>
            <td style={styles.td}>2</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>4</td>
            <td style={styles.td}>3</td>
          </tr>
          <tr>
            <td style={styles.td}>7</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>2</td>
            <td style={styles.td}>3</td>
            <td style={styles.td}>2</td>
          </tr>
          <tr>
            <td style={styles.td}>8</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>2</td>
            <td style={styles.td}>4</td>
            <td style={styles.td}>3</td>
          </tr>
          <tr>
            <td style={styles.td}>9</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>2</td>
            <td style={styles.td}>2</td>
          </tr>
          <tr>
            <td style={styles.td}>10</td>
            <td style={styles.td}>1</td>
            <td style={styles.td}>4</td>
            <td style={styles.td}>4</td>
            <td style={styles.td}>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  th: {
    padding: "8px",
    textAlign: "center",
    border: "1px solid #ddd",
  },
  td: {
    padding: "8px",
    textAlign: "center",
    border: "1px solid #ddd",
  },
};

export default Answer;
