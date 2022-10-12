import React from "react";

function Work() {
  return (
    <div className="work">
      <div className=" container text-center">
        <div className="pb-5 pt-5">
          <h1>
            How it&nbsp;
            <span className="color">Works</span>
          </h1>
        </div>
        <div>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/-V5QjGogoig"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="youtube video"
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
