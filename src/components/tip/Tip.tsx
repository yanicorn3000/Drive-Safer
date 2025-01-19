import Button from "../button/Button";
import styles from "./Tip.module.scss";
const Tip = () => {
  return (
    <section className="mx-auto mt-10 max-w-5xl flex flex-col justify-center gap-7 items-center">
      <h2 className="text-3xl font-bold border-b-2 border-green-300">
        Porada Dnia
      </h2>
      <div className="flex flex-row justify-between overflow-hidden bg-white border border-gray-200 rounded-lg shadow">
        <img src="src/assets/tip.jpg" className="max-w-lg" />
        <div className="p-6 flex flex-col gap-3 items-start justify-between">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
            quidem repellendus. Quam dolor deserunt eaque doloribus cupiditate
            culpa unde incidunt eius! Cumque, incidunt. Officiis dicta
            assumenda, inventore autem repellat ipsum nemo laudantium in
            veritatis voluptas nesciunt deleniti similique consectetur velit
            quod eos, distinctio nisi vel neque ducimus at provident.
          </p>
          <div className="flex justify-between w-full items-center">
            <span>Hearts</span>
            <span>Comments</span>
            <Button
              variant="primary"
              onClick={() => console.log("Primary clicked")}
            >
              Więcej <span className={styles.arrow}></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tip;
