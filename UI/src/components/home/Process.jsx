import React from "react";

const Process = () => {

  const steps = [
    "Consultation",
    "Planning",
    "Execution",
    "Ongoing Support"
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold text-center mb-14">
        Our Process
      </h2>

      <div className="grid md:grid-cols-4 gap-10 text-center">

        {steps.map((step, index) => (

          <div
            key={index}
            className="p-6 border rounded-xl"
          >

            <div className="text-blue-700 text-3xl font-bold mb-3">
              {index + 1}
            </div>

            <p className="font-medium">
              {step}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Process;