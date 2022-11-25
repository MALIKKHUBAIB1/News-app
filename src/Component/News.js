import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// export default class News extends Component {
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  //  static propTypes = {
  //     country : PropTypes.string.isRequired,
  //     category : PropTypes.string.isRequired,
  //     // pageSize = PropTypes.number.isRequiredz
  //  }
  // constructor(props){
  //     super(props)
  //     this.state = {
  //         articles :[],
  //         loading :false,
  //         totalResults:0,
  //         page:1
  //     }
  //     document.title = `${this.props.category} Newsmonkey`
  // }
  const updateNews = async () => {
    props.setProgress(10);
    // console.log("componentdidMount");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=881c1e6c160143ddb9d4d190a1651920&page=${page}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    // console.log(parseData);
    setArticles(parseData.articles);
    settotalResults(parseData.totalResults);
    props.setProgress(100);
  };

  //    async componentDidMount(){
  //        this.props.setProgress(10)
  //         console.log("componentdidMount");
  //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=881c1e6c160143ddb9d4d190a1651920&page=${this.state.page}`;
  //         let data = await fetch(url);
  //         this.props.setProgress(30)
  //         let parseData = await data.json();
  //         this.props.setProgress(70)
  //         console.log(parseData);
  //         this.setState({
  //            articles :parseData.articles,
  //            totalResults : parseData.totalResults
  //         })
  //         this.props.setProgress(100)
  //     }
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    // this.setState({
    //     page : this.state.page+1
    // })
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=881c1e6c160143ddb9d4d190a1651920&page=${page}`;

    setpage(page + 1);
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=881c1e6c160143ddb9d4d190a1651920&page=${page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    setArticles(articles.concat(parseData.articles), parseData.totalResults);
  };
  // render() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: "80px" }}>
        NewsMonkey--Top Headlines{" "}
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              console.log(element);
              return (
                <div className="col-md-4 my-3">
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageUrl={
                      element.urlToImage === null
                        ? "https://images.livemint.com/img/2021/12/20/600x338/83dd4898-eb08-11eb-8609-f87777eb8a7e_1626980472816_1640000100525.jpg"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                    authors={
                      element.author === null ? "unknowns" : element.author
                    }
                    dates={element.publishedAt}
                    sources={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  // pageSize = PropTypes.number.isRequiredz
};
export default News;
