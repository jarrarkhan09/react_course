import Comp2 from "./Comp2";
import propTypes from "prop-types";

const Student = ({ name, age }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <Comp2 name="Xarrar" age={age} />
    </>
  );
};

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
};

Student.defaultProps = {
  name: "Name",
  age: 18
}

export default Student;
