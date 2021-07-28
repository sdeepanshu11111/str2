import Cr from "./components/crausel";

function App() {
  return (
    <div className="App">
      <nav>
        <Cr />
      </nav>
      <main>
        <iframe
          className="if"
          src="https://www.youtube.com/embed/8SoWMS9ZVSk"
          title="YouTube video player"
          frameborder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </main>
    </div>
  );
}

export default App;
