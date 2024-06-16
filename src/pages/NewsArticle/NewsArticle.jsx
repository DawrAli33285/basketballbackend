import "./NewsArticle.css";

const NewsArticle = () => {
  const playersMentioned = [
    {
      player_id: "1a2b3c",
      player_name: "Wade Warren",
      player_height: "6'4",
      year: 2024,
      feature: "PG",
      player_image: "https://i.ibb.co/dLNf1rv/image-278.png",
      pg: 21.0,
    },
    {
      player_id: "4d5e6f",
      player_name: "John Doe",
      player_height: "6'2",
      year: 2024,
      feature: "PG",
      player_image: "https://i.ibb.co/wNGNbJM/image-293.png",
      pg: 21.0,
    },
    {
      player_id: "7g8h9i",
      player_name: "Jane Smith",
      player_height: "6'1",
      year: 2024,
      feature: "PG",
      player_image: "https://i.ibb.co/M8cVgnN/image-299.png",
      pg: 21.0,
    },
  ];

  return (
    <div>
      {/* top part */}
      <div className="space-y-4">
        <h3 className="text-2xl  text-[#000] font-semibold">
          {" "}
          he Impact of Our Basketball Recruit App on Player Development{" "}
        </h3>
        <p className="text-base text-[#000] leading-6"> 12 MAR, 2024 </p>

        <p className="text-base text-[#000] leading-6">
          Player Featured in this article:
        </p>

        {/* player wrappers */}
        <div className="flex items-center gap-5 overflow-x-auto lg:overflow-x-hidden pb-3 lg:pb-0 ">
          {playersMentioned &&
            playersMentioned.map((player, index) => (
              <div
                className="flex items-center gap-1 rounded-[50px] py-3 px-6 bg-[#F3F3F3] "
                key={index}
              >
                {/* profile */}
                <div className=" min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden ">
                  <img
                    className="w-full h-full object-cover"
                    src={player.player_image}
                    alt=""
                  />
                </div>

                {/* details */}
                <div>
                  <p className="text-[#000] text-base font-medium leading-normal">
                    {" "}
                    {player.player_name}{" "}
                  </p>

                  <div className="flex items-center gap-1 text-sm text-[#171717] font-medium leading-normal ">
                    <span> PG </span>l<span> {player.player_height} </span>l
                    <span> {player.year} </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* news banner */}
      <div className="mt-6 mb-6 lg:mb-12 w-full h-[300px] lg:h-[565px] rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/Hh5KBmG/news-baner.png"
          alt=""
        />
      </div>

      {/* news description */}
      <div className="news-article-description mb-[80px]">
        <div>
          <p>
            Basketball, often referred to as the beautiful game, transcends the
            boundaries of sport, captivating audiences{" "}
            <a className="profile--link" href="#">
              Albert Flores
            </a>{" "}
            worldwide with its blend of athleticism, strategy, and sheer
            excitement. From the rhythm of dribbling to the elegance of a
            perfectly executed jump shot, basketball is more than just a s an
            art form that reflects the human spirit in motion.
          </p>
        </div>
        <div>
          <h3>The Artistry of Movement</h3>
          <p>
            At its core, basketball is a dance of movement. Players{" "}
            <a className="profile--link" href="#">
              Wade Warren
            </a>
            glide across the court with grace and precision, orchestrating plays
            <a className="profile--link" href="#">
              Courtney Henry
            </a>{" "}
            like choreographed performances. Each dribble, pass, and shot is a
            brushstroke on the canvas of the court, creating a masterpiece of
            teamwork and skill.
          </p>
        </div>
        <div>
          <h3>The Power of Unity</h3>
          <p>
            At its core, basketball is a dance of movement. Players glide across
            the court with grace and precision, orchestrating plays like
            choreographed performances. Each dribble, pass, and shot is a
            brushstroke on the canvas of the court, creating a masterpiece of
            teamwork and skill.
          </p>
        </div>
        <div>
          <h3>Inspiration and Aspiration</h3>
          <p>
            At its core, basketball is a dance of movement. Players glide across
            the court with grace and precision, orchestrating plays like
            choreographed performances. Each dribble, pass, and shot is a
            brushstroke on the canvas of the court, creating a masterpiece of
            teamwork and skill.
          </p>
        </div>
        <div>
          <h3>Beyond the Scoreboard</h3>
          <p>
            At its core, basketball is a dance of movement. Players glide across
            the court with grace and precision, orchestrating plays like
            choreographed performances. Each dribble, pass, and shot is a
            brushstroke on the canvas of the court, creating a masterpiece of
            teamwork and skill.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
