import ArticleList from './ArticleList';
import ArticleLine from './ArticleLine';
import FeaturedArticle from './FeaturedArticle';
import Header from './Header';
import Navigation from './Navigation';
import { pages, featuredArticles, articles } from './data';

function App() {
  return (
    <div className="mx-4">
      <Header>
        <img className="h-8 sm:h-auto" src="./images/logo.svg" alt="logo" />
        <Navigation links={pages} />
      </Header>
      <main className="text-dark-grayish-blue text-base grid grid-cols-1 gap-y-16 gap-x-8 mb-32 items-start lg:grid-cols-3">
        <FeaturedArticle title="The Bright Future of Web 3.0?">
          <p className="text-base leading-relaxed">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        </FeaturedArticle>
        <ArticleList title="New">
          {featuredArticles.map((article, index) => (
            <article className="py-8 first:pt-0 last:pb-0" key={index}>
              <a href={article.url} className="text-off-white hover:text-soft-orange font-bold text-xl mb-3 block">
                <h3>{article.title}</h3>
              </a>
              <p className="text-base text-grayish-blue">{article.text}</p>
            </article>
          ))}
        </ArticleList>
        <ArticleLine>
          {articles.map((article, index) => (
            <article className="flex items-start gap-6 w-full" key={index}>
              <img className="w-1/3" src={article.image} alt={article.title} />
              <div>
                <div className="text-soft-red text-4xl font-extrabold mb-4 lg:mb-3">{(++index).toString().padStart(2, '0')}</div>
                <a href={article.url} className="text-lg font-extrabold text-very-dark-blue hover:text-soft-red block mb-3">
                  <h2>{article.title}</h2>
                </a>
                <p className="text-base">{article.text}</p>
              </div>
            </article>
          ))}
        </ArticleLine>
      </main>
      <footer className="text-center text-dark-grayish-blue">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Specro">Specro</a>.
      </footer>
    </div>
  )
}

export default App
