import CourseCard from "./CourseCard"; 

const CourseList = ({ courses, courseName }) => {
    console.log(courses); 
  const cardsArray = courses.filter(course => (course.name.includes(courseName))).map((course, idx) => (

      <CourseCard course={course}/>
  ));

  return (
    <div>
      {cardsArray}
    </div>
  );
};
export default CourseList;