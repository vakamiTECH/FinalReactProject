import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

function AddShopForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      shopName: '',
      town: '',
      startYear: '',
      description: '',
      imageUrl: '',
    },
    validate: (values) => {
      const errors = {};
      switch (true) {
        case !values.shopName:
          errors.shopName = 'Project name is required';
          break;
        case values.shopName.length < 4:
          errors.shopName = 'Project name must be at least 4 characters long';
          break;
        case !values.town:
          errors.town = 'Town is required';
          break;
        case values.town.length < 4:
          errors.town = 'Town name must be at least 4 characters long';
          break;
        case !values.startYear:
          errors.startYear = 'Project start year is required';
          break;
        case values.startYear < 1970 || values.startYear > 2022:
          errors.startYear = 'Project start year must be between 1970 and 2022';
          break;
        case !values.description:
          errors.description = 'Description is required';
          break;
        case values.description.length < 6:
          errors.description = 'Description must be at least 6 characters long';
          break;
        case !values.imageUrl:
          errors.imageUrl = 'Image URL is required';
          break;
        case values.imageUrl.length < 5:
          errors.imageUrl = 'Image URL must be at least 5 characters long';
          break;
        default:
          break;
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log('Form values', values);
      onSubmit(values);
    },
  });

  return (
    <div className="flex mx-auto">
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="my-4 hover:scale-105 transition duration-500 ease-in-out">
          <label
            htmlFor="shopName"
            className="block text-primary font-big-shoulders-stencil-display text-xl font-bold mb-2"
          >
            Your Project name
          </label>
          <input
            placeholder="Project name"
            id="shopName"
            type="text"
            name="shopName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.shopName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.shopName && formik.errors.shopName ? (
            <div className="text-red-500">{formik.errors.shopName}</div>
          ) : null}
        </div>
        <div className="my-4 hover:scale-105 transition duration-500 ease-in-out">
          <label
            htmlFor="town"
            className="block text-primary font-big-shoulders-stencil-display text-xl font-bold mb-2"
          >
            Project located
          </label>
          <input
            placeholder="Town"
            id="town"
            type="text"
            name="town"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.town}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.town && formik.errors.town ? (
            <div className="text-red-500">{formik.errors.town}</div>
          ) : null}
        </div>
        <div className="my-4 hover:scale-105 transition duration-500 ease-in-out">
          <label
            htmlFor="startYear"
            className="block text-primary font-big-shoulders-stencil-display text-xl font-bold mb-2"
          >
            Project start year
          </label>
          <input
            placeholder="Year"
            id="startYear"
            type="number"
            name="startYear"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startYear}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.startYear && formik.errors.startYear ? (
            <div className="text-red-500">{formik.errors.startYear}</div>
          ) : null}
        </div>
        <div className="my-4 hover:scale-105 transition duration-500 ease-in-out">
          <label
            htmlFor="description"
            className="block text-primary font-big-shoulders-stencil-display text-xl font-bold mb-2"
          >
            Description
          </label>
          <textarea
            placeholder="Description"
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="my-4 hover:scale-105 transition duration-500 ease-in-out">
          <label
            htmlFor="imageUrl"
            className="block text-primary font-big-shoulders-stencil-display text-xl font-bold mb-2"
          >
            Project photos
          </label>
          <input
            placeholder="Image URL"
            id="imageUrl"
            type="text"
            name="imageUrl"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageUrl}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <div className="text-red-500">{formik.errors.imageUrl}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-lightGreen hover:bg-darkGreen hover:scale-105 transition duration-500 ease-in-out text-white font-big-shoulders-stencil-display font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

AddShopForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddShopForm;
