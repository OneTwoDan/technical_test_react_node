import { Article } from "../../components";
import useArticles from "../../hooks/useArticles";
import "./ArticleList.css";

const ArticleList = () => {
  const { articles, loading } = useArticles();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="article-list">
      {articles.map(({ _id, author, title, description, urlToImage, url }) => (
        <Article
          key={_id}
          author={author}
          title={title}
          description={description}
          urlToImage={urlToImage}
          url={url}
        />
      ))}
    </div>
  );
};

export default ArticleList;
