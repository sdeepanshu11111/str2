import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import imageOne from "../images/1.jpg";
import imageTwo from "../images/2.jpg";
import imageThree from "../images/3.jpg";
import { useState } from "react";
import Color, { Palette } from "color-thief-react";
const Loading = () => <div>Loading...</div>;

const Cr = () => {
  const [pallete, setPalette] = useState("");

  return (
    <Carousel
      className="c"
      plugins={[
        "infinite",
        {
          resolve: autoplayPlugin,
          options: {
            interval: 4000,
          },
        },
      ]}
      animationSpeed={1000}
    >
      <div className="div">
        <Color src={imageOne} crossOrigin="anonymous" format="hex">
          {({ data, loading }) => {
            if (loading) return <Loading />;

            console.log(typeof data);
            return (
              <div className="color">
                <strong className="st" style={{ color: `${data}` }}>
                  Text is changing according image
                </strong>
              </div>
            );
          }}
        </Color>

        <img src={imageOne} alt="" />
      </div>
      <div className="div">
        <Color
          className="color"
          src={imageTwo}
          crossOrigin="anonymous"
          format="hex"
        >
          {({ data, loading }) => {
            if (loading) return <Loading />;

            console.log(typeof data);
            return (
              <div>
                <strong className="st" style={{ color: `${data}` }}>
                  Text is changing according image
                </strong>
              </div>
            );
          }}
        </Color>

        <img src={imageTwo} alt="" />
      </div>

      <div className="div">
        <Color
          className="color"
          src={imageThree}
          crossOrigin="anonymous"
          format="hex"
        >
          {({ data, loading }) => {
            if (loading) return <Loading />;

            console.log(typeof data);
            return (
              <strong className="st" style={{ color: `${data}` }}>
                Text is changing according image
              </strong>
            );
          }}
        </Color>

        <img src={imageThree} alt="" />
      </div>
    </Carousel>
  );
};

export default Cr;
