import React from "react";

const Contact = () => {
  return (
    <section class="p-20 h-[80vh]" id="contact">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Contact Us</h2>

        <div class="grid grid-cols-2 gap-8">
          <div>
            <form>
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="w-full border border-gray-700 bg-transparent px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div class="mb-4">
                <label for="email" class="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="w-full border border-gray-700 bg-transparent px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div class="mb-4">
                <label for="message" class="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  class="w-full border border-gray-700 bg-transparent px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              >
                Send
              </button>
            </form>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 p-4 text-center text-white h-40 flex flex-col justify-center rounded-xl">
              <h3 class="text-xl font-bold mb-2">Github</h3>
              <a href="https://github.com/kevinjuliow" className="hover:underline">kevinjuliow</a>
            </div>

            <div class="bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 p-4 text-center text-white  h-40 flex flex-col justify-center rounded-xl">
              <h3 class="text-xl font-bold mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/kevin-julio/" className="hover:underline">kevin-julio</a>
            </div>

            <div class="bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 text-center text-white h-40 flex flex-col justify-center rounded-xl">
              <h3 class="text-xl font-bold mb-2">E-Mail</h3>
              <p>kevjuliow@gmail.com</p>
            </div>

            <div class="bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 p-4 text-center text-white h-40 flex flex-col justify-center rounded-xl">
              <h3 class="text-xl font-bold mb-2">Phone</h3>
              <p>+62 813 9049 5714</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-center mt-60">
        <p>&copy; ETracker 2023</p>
      </div>
    </section>
  );
};

export default Contact;
