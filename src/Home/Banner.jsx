import { easeOut, motion } from "framer-motion";
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-72 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-lime-400  shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10,delay:5, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-purple-600  shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Latest Job For You</h1>
          <motion.h1
            animate={{ x: 50, color: ["#99eb08", "#08ebda", "#6808eb"] }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest Job For You
          </motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
