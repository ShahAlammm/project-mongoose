import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoBD = async (studentData: TStudent) => {
  // const result = await Student.create(studentData);

  const student = new Student(studentData);

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists');
  // }

  const result = await student.save();

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentService = {
  createStudentIntoBD,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
