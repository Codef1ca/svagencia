"use client"; // 👈 Esto hace que todo sea un Client Component

import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
  return (
    <ReactFullpage
      licenseKey="gplv3"
      credits={{ enabled: true, label: "Fullpage.js", position: "right" }}
      scrollingSpeed={1000}
      navigation={false}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section bg-blue-200 flex items-center justify-center text-3xl">
            Sección 1
          </div>
          <div className="section bg-green-200 flex items-center justify-center text-3xl">
            Sección 2
          </div>
          <div className="section bg-yellow-200 flex items-center justify-center text-3xl">
            Sección 3
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
