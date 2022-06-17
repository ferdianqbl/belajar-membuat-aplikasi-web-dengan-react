function Button({ link }) {
  return <a href={link}>Find out more</a>;
}

function CardHeader({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="news img" />
    </header>
  );
}

function CardBody({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <p>{title}</p>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

function News() {
  // data news
  const someNews = [
    {
      title: "CNN Acuire BEME",
      date: "March 20 2022",
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "React and the WP-API",
      date: "March 19 2022",
      content: "The first ever decoupled starter theme for React & the WP-API.",
      image: "https://source.unsplash.com/user/ilyapavlov/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "Nomad Lifestyle",
      date: "March 19 2022",
      content: "Learn our tips and tricks on living a nomadic lifestyle.",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "Travel",
      link: "#",
    },
  ];

  return (
    <div className="container">
      <Header
        title="News"
        subtitle="Latest news from the world of technology."
      />
      {someNews.map((news, index) => (
        <Card key={index} {...news} />
      ))}
    </div>
  );
}

export default News;