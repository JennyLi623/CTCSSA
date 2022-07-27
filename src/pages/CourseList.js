import CourseCard from "./CourseCard"; 

const CourseList = ({ courses }) => {
    console.log(courses); 
  const cardsArray = courses.map((course, idx) => (
      <CourseCard course={course}/>
  ));

  return (
    <div>
      {cardsArray}
    </div>
  );
};
export default CourseList;