import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="max-w-full min-h-screen flex flex-col justify-baseline items-center gap-10 py-30 px-10">
      <h1>Home Page</h1>
      <motion.div initial={{x:'-100vw'}} animate={{x:0}} className="p-5 border-solid border-1 border-gray-200 rounded-xl shadow-lg shadow-gray-300">
        <p>
          pus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
          adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
          pulvinar, hendrerit id, lorem. Maecenas nec tor eu amet orci eget eros
          faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
          Donec sodales sagittis magna. Sed consequat, leo eget bibendum
          sodales, augue velit cursus nunc,
        </p>
      </motion.div>
      <div className="p-5 border-solid border-1 border-gray-200 rounded-xl shadow-lg shadow-gray-300">
        <p>
          pus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
          adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
          pulvinar, hendrerit id, lorem. Maecenas nec tor eu amet orci eget eros
          faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
          Donec sodales sagittis magna. Sed consequat, leo eget bibendum
          sodales, augue velit cursus nunc,
        </p>
      </div>
      <div className="p-5 border-solid border-1 border-gray-200 rounded-xl shadow-lg shadow-gray-300">
        <p>
          pus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
          adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
          pulvinar, hendrerit id, lorem. Maecenas nec tor eu amet orci eget eros
          faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
          Donec sodales sagittis magna. Sed consequat, leo eget bibendum
          sodales, augue velit cursus nunc,
        </p>
      </div>
      <div className="p-5 border-solid border-1 border-gray-200 rounded-xl shadow-lg shadow-gray-300">
        <p>
          pus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
          adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
          pulvinar, hendrerit id, lorem. Maecenas nec tor eu amet orci eget eros
          faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
          Donec sodales sagittis magna. Sed consequat, leo eget bibendum
          sodales, augue velit cursus nunc,
        </p>
      </div>
    </div>
  );
};
