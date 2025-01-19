import Button from "../button/Button";
const Comments = () => {
  return (
    <section className="w-full flex justify-center">
      <form className="w-3/4 flex flex-col gap-4 mt-8">
        <label
          htmlFor="message"
          className="block mb-2 text-lg font-semibold text-gray-900"
        >
          Masz pytanie?
        </label>
        <textarea
          id="message"
          className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 "
          placeholder="Napisz wiadomość..."
        ></textarea>

        <Button variant="primary" type="submit" className="self-end">
          Wyślij wiadomość
        </Button>
      </form>
    </section>
  );
};

export default Comments;
