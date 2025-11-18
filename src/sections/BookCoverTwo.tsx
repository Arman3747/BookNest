import anyway from "../assets/anyway.jpg";

const BookCoverTwo = () => {
  return (
    <section className="m-2 p-2">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
          <img className="w-[232px] rounded-xl" src={anyway} alt="code" />
        </div>
        <div className="w-full lg:w-3/4">
          <p className="text-4xl font-semibold">Anyway</p>
          <p className="text-2xl italic">by Kent M Keith</p>
          <br />
          <br />

          <p className="text-lg text-justify">
            <span className="italic font-semibold">The Paradoxical Commandments</span>  <br />
            "People are illogical, unreasonable,
            and self-centered. Love them anyway. 
            <br />
            If you do good, people will
            accuse you of selfish ulterior motives. Do good anyway. 
            <br />
            If you are
            successful, you will win false friends and true enemies. Succeed
            anyway. 
            <br />
            The good you do today will be forgotten tomorrow. Do good
            anyway. 
            <br />
            Honesty and frankness make you vulnerable. Be honest and
            frank anyway. 
            <br />
            What you spend years building may
            be destroyed overnight. Build anyway. 
            <br />
            People really need help but
            may attack you if you do help them. Help people anyway. 
            <br />
            Give the world the best you have and you'll get kicked in the teeth. Give the
            world the best you have anyway."
          </p>
          <p className="text-lg text-right">― Kent M. Keith</p>
        </div>
      </div>
    </section>
  );
};

export default BookCoverTwo;
