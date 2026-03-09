import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
    { number: 350, suffix: "+", label: "Clients Served" },
    { number: 25, suffix: "+", label: "Years Experience" },
    { number: 500, suffix: "+", label: "Projects Completed" },
    { number: 1500, suffix: "+", label: "Financial Reports" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Impact in Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >

              <h3 className="text-4xl font-bold text-blue-900">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </h3>

              <p className="text-gray-600 mt-3">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;