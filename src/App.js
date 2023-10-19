import logo from "./logo.svg";
import "./App.css";
import cardimg from "./illustration-hero.svg";
import music from "./icon-music.svg";
function App() {
  return (
    <div className="App shadow card border-0 pb-4">
      <img src={cardimg} className="App-logo card-img-top" alt="logo" />
      <div className="card-body">
        <div className="card-title text-center card-title-text">
          <p className="my-3">Order Summary</p>
        </div>
        <div className="card-text text-center fw-normal text-muted">
          <p className="w-75 mx-auto">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className="row my-4 align-items-center px-2 py-3 musiccard rounded-3">
          <div className="col-8">
            <div className="row">
              <div className="col-2">
                <img src={music} />
              </div>
              <div className="col-2"></div>
              <div className="col-8">
                <span className="fw-bolder">Annual Plan</span>
                <br />
                <span className="text-muted">$59.99/year</span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <a href="#" className="fw-bolder">
              Change
            </a>
          </div>
        </div>
        <div className="row px-4 mx-auto my-4 justify-content-center align-items-center rounded-3">
          <button className="btn shadow px-2 py-2 fw-bolder text-light">
            Proceed to Payment
          </button>
        </div>
        <center>
          <span className="text-muted fw-bolder cancel"> Cancel Order</span>
        </center>
      </div>
    </div>
  );
}

export default App;
