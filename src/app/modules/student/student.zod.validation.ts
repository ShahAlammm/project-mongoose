import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, 'Maximum support 20 characters')
    .nonempty('First name is required')
    .refine((value) => {
      const firstNameStar = value.charAt(0).toUpperCase() + value.slice(1);
      return firstNameStar === value;
    }, 'First name must start with an uppercase letter'),
  middleName: z.string().optional(),
  lastName: z.string().nonempty('Last name is required'),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty("Father's name is required"),
  fatherOccupation: z.string().nonempty("Father's occupation is required"),
  fatherContact: z.string().nonempty("Father's contact is required"),
  motherName: z.string().nonempty("Mother's name is required"),
  motherOccupation: z.string().nonempty("Mother's occupation is required"),
  motherContact: z.string().nonempty("Mother's contact is required"),
});

const localGuardianValidationSchema = z.object({
  name: z.string().nonempty("Local guardian's name is required"),
  occupation: z.string().nonempty("Local guardian's occupation is required"),
  contactNo: z.string().nonempty("Local guardian's contact number is required"),
  address: z.string().nonempty("Local guardian's address is required"),
});

const studentValidationSchema = z.object({
  id: z.string().nonempty('ID is required'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    invalid_type_error: 'Gender is required',
    required_error: 'Gender is required',
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  emergencyContactNo: z
    .string()
    .nonempty('Emergency contact number is required'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
      invalid_type_error: '{VALUE} is not a valid blood group',
    })
    .optional(),
  presentAddress: z.string().nonempty('Present address is required'),
  permanentAddress: z.string().nonempty('Permanent address is required'),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().nonempty('Profile image is required'),
  isActive: z
    .enum(['active', 'blocked'], {
      invalid_type_error: '{VALUE} is not a valid status',
    })
    .default('active'),
});

export default studentValidationSchema;
