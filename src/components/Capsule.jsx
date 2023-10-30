/* eslint-disable react/prop-types */
const Capsule = ({ title }) => {
  return (
    <div className="w-fit p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 hover:select-none">
      {title}
    </div>
  );
};

export default Capsule;
