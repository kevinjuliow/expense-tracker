import React from 'react'

const AboutUs = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center" id='aboutUs'>
    {/* Header */}
    <div className="bg-white w-full p-4">
      <h1 className="text-2xl font-bold">eTracker</h1>
      <p className="text-gray-500">Your financial companion</p>
    </div>

    {/* Main Content */}
    <div className="w-full p-10 bg-slate-200 rounded-md mt-4">
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="text-gray-500 mt-4">
        eTracker is a user-friendly expense tracking app designed to help you take control of your finances. With eTracker, you can easily monitor your spending, set budgets, and achieve your financial goals.
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p className="text-gray-500 mt-2">
          Our mission is to empower individuals to make informed financial decisions by providing a simple and effective expense tracking solution.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">How it Works</h2>
        <p className="text-gray-500 mt-2">
          ETracker makes expense tracking effortless. Simply categorize your transactions, set budgets, and watch your financial health improve.
        </p>
      </div>
    </div>

 
  </div>
  )
}

export default AboutUs