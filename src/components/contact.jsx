import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    const { firstName, lastName, email, subject, message } = data;
    try {
      setDisabled(true); // Disable the form while processing

      const templateParams = {
        firstName,
        lastName,
        email,
        subject,
        message,
      };

      // Send the form data to EmailJS
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,    // EmailJS Service ID
        process.env.REACT_APP_TEMPLATE_ID,   // EmailJS Template ID
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY     // EmailJS Public Key
      );      

      // Display success message
      toggleAlert('Form submission was successful!', 'success');
    } catch (error) {
      console.error('EmailJS error:', error.response?.text || error.message);
      // Display error message
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);  // Re-enable the form after submission
      reset({}, { keepErrors: false });  // Clear the form fields and errors
    }
  };

  return (
    <div className='Contact'>
      <div className='container bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center'>
        <div className='text-center'>
          <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* First Name and Last Name Fields */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <input
                  type='text'
                  name='firstName'
                  {...register('firstName', {
                    required: 'Please enter your first name',
                    maxLength: 30,
                  })}
                  className='form-control w-full p-3 rounded-lg transition-all hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border transform hover:scale-105'
                  placeholder='First Name'
                  aria-label='First Name'
                />
                {errors.firstName && (
                  <span className='text-red-500 text-sm'>
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div>
                <input
                  type='text'
                  name='lastName'
                  {...register('lastName', {
                    required: 'Please enter your last name',
                    maxLength: 30,
                  })}
                  className='form-control w-full p-3 rounded-lg transition-all hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border transform hover:scale-105'
                  placeholder='Last Name'
                  aria-label='Last Name'
                />
                {errors.lastName && (
                  <span className='text-red-500 text-sm'>
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className='mt-4'>
              <input
                type='email'
                name='email'
                {...register('email', {
                  required: 'Please enter a valid email',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Please enter a valid email address',
                  },
                })}
                className='form-control w-full p-3 rounded-lg transition-all hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border transform hover:scale-105'
                placeholder='Email Address'
                aria-label='Email Address'
              />
              {errors.email && (
                <span className='text-red-500 text-sm'>
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Subject Field */}
            <div className='mt-4'>
              <input
                type='text'
                name='subject'
                {...register('subject', {
                  required: 'Please enter a subject',
                  maxLength: 75,
                })}
                className='form-control w-full p-3 rounded-lg transition-all hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border transform hover:scale-105'
                placeholder='Subject'
                aria-label='Subject'
              />
              {errors.subject && (
                <span className='text-red-500 text-sm'>
                  {errors.subject.message}
                </span>
              )}
            </div>

            {/* Message Field */}
            <div className='mt-4'>
              <textarea
                rows={5}
                name='message'
                {...register('message', {
                  required: 'Please enter a message',
                })}
                className='form-control w-full p-3 rounded-lg transition-all hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border transform hover:scale-105'
                placeholder='Message'
                aria-label='Message'
              ></textarea>
              {errors.message && (
                <span className='text-red-500 text-sm'>
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              className='mt-6 p-2 bg-gray-200 dark:bg-gray-600 rounded-full focus:outline-none transform hover:scale-105'
              disabled={disabled}
              type='submit'
            >
              {disabled ? (
                <span className='animate-spin border-4 border-t-4 border-white border-t-transparent rounded-full w-5 h-5 inline-block'></span>
              ) : (
                'Send'
              )}
            </button>
          </form>
        </div>

        {/* Alert */}
        {alertInfo.display && (
          <div
            className={`mt-6 p-4 text-center rounded-lg ${
              alertInfo.type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {alertInfo.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
