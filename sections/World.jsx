'use client';

import {motion} from "framer-motion";
import { TypingText , TitleText} from "../components";
import styles from '../styles';

import {staggerContainer, fadeIn} from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
        <TypingText title="| People on the World" textStyles="text-center"/>
        <TitleText title={<>Track friends aroung you and and invite them to play togethrt in the same world</>}/>
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px] "
        >
            <img
              src="/map.png"
              alt="map"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-20 right-20 w-[70px] h-[70px] rounded-full p-[6px] bg-[#5d6680]">
              <img
                src="/people-01.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-10 left-20 w-[70px] h-[70px] rounded-full p-[6px] bg-[#5d6680]">
              <img
                src="/people-02.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] rounded-full p-[6px] bg-[#5d6680]">
              <img
                src="/people-03.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-[40%] left-[20%] w-[201px] h-[155px] rounded-[24px] p-[6px] bg-[#5d6680]">
              <img
                src="/card1.png"
                alt="card1"
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-[40%] left-[20%] w-[211px] h-[165px]">
              <img
                src="/card1-blur.png"
                alt="card1-blur"
                className="w-full h-full"
              />
              <div className="absolute top-[45%] right-[79%] w-[32px] h-[32px]">
              <img
                src="/people-01.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
              <div className="absolute top-[45%] right-[75%] w-[32px] h-[32px]">
              <img
                src="/people-02.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
              <div className="absolute top-[45%] right-[72%] w-[32px] h-[32px]">
              <img
                src="/people-03.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
              <p className="absolute text-white  bottom-16 left-16">
                +265 have joined
              </p>
              <h2 className="absolute text-white font-bold bottom-6 left-5">
                The Upside Down
              </h2>
            </div>
            <div className="absolute top-[13%] right-[30%] w-[201px] h-[155px] rounded-[24px] p-[6px] bg-[#5d6680]">
              <img
                src="/card2.png"
                alt="card2"
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-[13%] right-[30%] w-[211px] h-[165px]">
              <img
                src="/card2-blur.png"
                alt="card2-blur"
                className="w-full h-full"
              />
              <div className="absolute top-[45%] right-[76%] w-[32px] h-[32px]">
              <img
                src="/people-01.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
              <div className="absolute top-[45%] right-[72%] w-[32px] h-[32px]">
              <img
                src="/people-02.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
              <div className="absolute top-[45%] right-[69%] w-[32px] h-[32px]">
              <img
                src="/people-03.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
              <p className="absolute text-white  bottom-16 right-2">
                +305 have joined
              </p>
              <h2 className="absolute text-white font-bold bottom-6 left-7">
                Hawkins Lab
              </h2>
            </div>
        </motion.div>
    </motion.div>
  </section>
);

export default World;
