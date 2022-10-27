import React from 'react';

const FAQ = () => {
    return (
      <section className=" text-white bg-teal-900">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="w-full border border-gray-400 rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                How to get Premium access?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">
                Select Course from Home page or in the Navbar. Then you will find all Courses. Select what you want to learn. Scroll down, you will see premium access button.Please signup/signin before proceeding to the premium checkout page.{" "}
              </p>
            </details>
            <details className="w-full border border-gray-400 rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Is there any way to read offline?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">
                Yeah!! You can download pdf of our free version. Just click Courses in the navbar and select a course then you will find a print icon beside the Title.After Clicking it pdf file of that page will be downloaded.{" "}
              </p>
            </details>
            <details className="w-full border border-gray-400 rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                How do I get Update from you?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                It's simple. Just scroll down the homepage, you will see our get update form.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    );
};

export default FAQ;