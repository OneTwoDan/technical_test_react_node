import "./Article.css";

const Article = ({ author, title, description, urlToImage, url }) => {
  return (
    <a href={url} className="article" target="_blank" rel="noopener noreferrer">
      <img src={urlToImage} alt={title} className="picture" />
      <div className="text-container">
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="description">{description}</div>
      </div>
    </a>
  );
};

export default Article;
