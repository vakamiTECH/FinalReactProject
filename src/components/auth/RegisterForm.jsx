import React from 'react';
import { useFormik } from 'formik';

function RegisterForm({ onRegister }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('Form values', values);
      onRegister(values);
    },
  });

  return (
    <div className="flex mx-auto mt-40">
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="my-4 hover:scale-105 transition duration-500 ease-in-out">
          <label
            htmlFor="email"
            className="block text-primary font-big-shoulders-stencil-display text-xl font-bold mb-2"
          >
            Email
          </label>
          <input
            placeholder="create email"
            id="email"
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="my-4 hover:scale-105 transition duration-500 ease-in-out">
          <label
            htmlFor="password"
            className="block text-primary font-big-shoulders-stencil-display text-xl font-bold mb-2"
          >
            Password
          </label>
          <input
            placeholder="create password"
            id="password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-lightGreen hover:bg-darkGreen transition duration-500 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
