import React from 'react';
import useLogin from './useLogin';
import images from '../assets/images';

const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    isLoading,
    error
  } = useLogin();

  return (
    <form id="LoginForm_1" className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div id="LoginForm_2" className="text-red-500 text-sm text-center">
          {error}
        </div>
      )}
      <div id="LoginForm_3" className="rounded-md shadow-sm -space-y-px">
        <div id="LoginForm_4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div id="LoginForm_5">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div id="LoginForm_6">
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
        >
          {isLoading ? (
            <span id="LoginForm_7" className="flex items-center">
              Loading...
            </span>
          ) : (
            <span id="LoginForm_8">Sign in</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;