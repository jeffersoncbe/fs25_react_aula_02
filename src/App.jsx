import "./App.css";
import { Card } from "./components/Card";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const getPosts = async () => {
    const response = await fetch(BASE_URL).then((res) => res.json());
    renderCards(response);
  };

  const renderCards = (cards) => {
    const result = cards.map((post) => <Card nome={post.title} />);
    return result;
  };

  getPosts();

  return <div className="flex">{renderCards()}</div>;
}

export default App;
