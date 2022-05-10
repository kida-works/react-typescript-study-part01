import Header from './components/header'
import Main from './components/main';
import Contents from './components/contents'
import './App.css';

function App() {
  const nameList = [
    "そら","シロ","ステファニー・ドーラ", "ジブリール"
  ]
  return (
    <div className="App">
      <Header title="header"/>
      <Main>
        <p>ノゲノラはめっちゃ面白いが、ノゲノラゼロは個人的にもっと面白い！</p>
        <Contents title="キャラクターネーム" lists={nameList}/>
      </Main>
    </div>
  );
}

export default App;
