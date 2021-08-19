import moment from 'moment';

const Article = ({ title, snippet, date, length }) => {
  const fixedDate = moment(date).format('MMMM Do YYYY');

  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{fixedDate}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
