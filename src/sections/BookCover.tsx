import steve from "../assets/steve_jobs.jpg";

const BookCover = () => {
  return (
    <section className="m-2 py-6 px-2 border-b-2">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
          <img className="w-[232px] rounded-xl" src={steve} alt="code" />
        </div>
        <div className="w-full lg:w-3/4">
          <p className="text-4xl font-semibold">Steve Jobs</p>
          <p className="text-2xl italic">by Walter Isaacson</p>
          <br />
          <br />

          <p className="text-lg text-justify">
            “Here's to the crazy ones. The misfits. The rebels. The
            troublemakers. The round pegs in the square holes. The ones who see
            things differently. They're not fond of rules. And they have no
            respect for the status quo. You can quote them, disagree with them,
            glorify or vilify them. About the only thing you can't do is ignore
            them. Because they change things. They push the human race forward.
            And while some may see them as the crazy ones, we see genius.
            Because the people who are crazy enough to think they can change the
            world, are the ones who do.”
          </p>
          <p className="text-lg text-right">― Steve Jobs</p>
        </div>
      </div>
    </section>
  );
};

export default BookCover;
