import Card from "./Card"; 

const CourseList = ({ courses }) => {
    console.log(courses); 
  const cardsArray = courses.map((course, idx) => (
      <Card course={course}/>
  ));

  return (
    <div>
      {cardsArray}
    </div>
  );
};
export default CourseList;