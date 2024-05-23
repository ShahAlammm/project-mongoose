import Joi from 'joi';

const userNameValidationSchema = Joi.object({
    firstName: Joi.string().max(20).required().messages({
      'string.max': 'maximum support 20 character',
      'any.required': 'First name is required',
    }),
    middleName: Joi.string().max(20).allow(''),
    lastName: Joi.string().required().messages({
      'any.required': 'Last name is required',
    }),
  });

  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().messages({
      'any.required': "Father's name is required",
    }),
    fatherOccupation: Joi.string().required().messages({
      'any.required': "Father's occupation is required",
    }),
    fatherContact: Joi.string().required().messages({
      'any.required': "Father's contact is required",
    }),
    motherName: Joi.string().required().messages({
      'any.required': "Mother's name is required",
    }),
    motherOccupation: Joi.string().required().messages({
      'any.required': "Mother's occupation is required",
    }),
    motherContact: Joi.string().required().messages({
      'any.required': "Mother's contact is required",
    }),
  });

  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required().messages({
      'any.required': "Local guardian's name is required",
    }),
    occupation: Joi.string().required().messages({
      'any.required': "Local guardian's occupation is required",
    }),
    contactNo: Joi.string().required().messages({
      'any.required': "Local guardian's contact number is required",
    }),
    address: Joi.string().required().messages({
      'any.required': "Local guardian's address is required",
    }),
  });

  const studentValidationSchema = Joi.object({
    id: Joi.string().required().messages({
      'any.required': 'ID is required',
    }),
    name: userNameValidationSchema.required().messages({
      'any.required': 'Name is required',
    }),
    gender: Joi.string()
      .required()
      .valid('male', 'female', 'other')
      .messages({
        'any.only': '{#value} is not a valid gender',
        'any.required': 'Gender is required',
      }),
    dateOfBirth: Joi.string().allow(''),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
    }),
    emergencyContactNo: Joi.string().required().messages({
      'any.required': 'Emergency contact number is required',
    }),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
      .messages({
        'any.only': '{#value} is not a valid blood group',
      }),
    presentAddress: Joi.string().required().messages({
      'any.required': 'Present address is required',
    }),
    permanentAddress: Joi.string().required().messages({
      'any.required': 'Permanent address is required',
    }),
    guardian: guardianValidationSchema.required().messages({
      'any.required': 'Guardian information is required',
    }),
    localGuardian: localGuardianValidationSchema.required().messages({
      'any.required': 'Local guardian information is required',
    }),
    profileImg: Joi.string().required().messages({
      'any.required': 'Profile image is required',
    }),
    isActive: Joi.string()
      .valid('active', 'blocked')
      .default('active')
      .messages({
        'any.only': '{#value} is not a valid status',
      }),
  });

export default studentValidationSchema
