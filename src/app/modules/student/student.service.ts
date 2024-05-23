import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoBD = async (student: TStudent) => {
  const result = await Student.create(student);
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
