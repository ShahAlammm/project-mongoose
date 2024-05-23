import { Request, Response } from 'express';
import { StudentService } from './student.service';
import studentValidationSchema from './student.zod.validation';

// import studentValidationSchema from './student.validation';


const createStudent = async (req: Request, res: Response) => {
  try {

    const { student: studentData } = req.body;

    const zodParsedData = studentValidationSchema.parse(studentData)
    // console.log(error, value);

    const result = await StudentService.createStudentIntoBD(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
