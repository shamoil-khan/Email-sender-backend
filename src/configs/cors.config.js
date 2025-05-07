const whiteList = ["http://localhost:5173","http://localhost:3000", "https://shamoil-khan.vercel.app"];

const corsConfig = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("cors error"));
    }
  },
};

module.exports = {
  corsConfig,
};
