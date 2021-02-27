import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header p-4 heigth-400px" >
                <nav className="navbar navbar-expand-lg mb-3" >
                    <div className="container-fluid" >
                        <img src="/images/ironhack-logo.svg" alt="Ironhack-logo" />
                        <img src="/images/menu-top.svg"alt="Menu" />
                    </div>
                </nav >

                <div className="container mt-5" >
                    <h1 className="text-lg fw-bold" > Say hello to <br/>ReactJs </h1>
                    <h5 className="mt-4 fw-lighter" > You will learn how to use <br/>the most popular frontend library,<br/>and become a super Ninja developer.</h5>
                    <button type="button" className="btn btn-light btn-lg mt-5">Awesome! </button>
                </div >
            </header>

            <section className="container mt-5 pb-5">
                <div className="d-flex p-2">
                    <div className="row d-flex text-start">
                        <div className="col p-3 mx-3">
                            <img src="/images/icon1.png" className="image-fluid" alt="icon1"/>
                                <h4>Declarative</h4>
                                <p>React makes it<br/>painless to create<br/>interactive Uls.</p>
                        </div>

                        <div className="col p-3 mx-3">
                            <img src="/images/icon2.png" className="image-fluid" alt="icon2"/>
                                <h4>Components</h4>
                                <p>Build encapsulated<br/>components that<br/>manage their state.</p>
                        </div>

                        <div className="col p-3 mx-3" >
                            <img src="/images/icon3.png"  className="image-fluid" alt="icon3"/>
                                <h4>Single - Way</h4>
                                <p>A set of immutable<br/>values are passed to<br/>the component's.</p>
                        </div>

                        <div className="col p-3 mx-3">
                            <img src="/images/icon4.png" className="image-fluid" alt="icon4"/>
                                <h4>JSX</h4>
                                <p>Statically - typed,<br/>designed to run on<br/>modern browsers.</p>
                        </div >
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;