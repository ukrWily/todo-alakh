import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

// styled component
// // tagget template literals

// import styled from "styled-components";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   color: white;
//   background: #00358b;
//   border-radius: 4px;
//   box-shadow: 0 0 4px rgba(50, 50, 50, 0.25);
//   cursor: pointer;

//   @media (min-width: 700px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover {
//     background: #245fbd;
//     box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.75);
//   }

//   &:active {
//     box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.75);
//     transform: scale(0.9);
//   }
// `;

export default Button;
