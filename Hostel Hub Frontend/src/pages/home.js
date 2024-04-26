import React from "react";
import logo from '../assets/images/Logo.jpeg';
import hostelLogo from '../assets/images/Hostel-Hub-Logo.png';
class Home extends React.Component{
    
    render(){
        return(
            <div>
                <header class="d-flex flex-wrap justify-content-center py-3 border-bottom nav-bar">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" previewlistener="true">
                        <span class="fs-4"><a href='#'><img width='100px' src={hostelLogo}></img></a></span>
                    </a>
  
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="#hero" class="nav-link" aria-current="page" id="home-button">Home</a></li>
                        <li class="nav-item"><a href="#featured-3" class="nav-link" id="features-button">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link" id="book-hostel-button">Book a Hostel</a></li>
                        <li class="nav-item"><a href="#about" class="nav-link" id="about-button">About</a></li>
                    </ul>
                </header>

                <div class="px-4 text-center" id="hero">
                    <h1 class="display-5 fw-bold text-body-emphasis"></h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4"></p>
                    </div>
                </div>

                <hr />

                <div class="container px-4 py-5" id="featured-3">
                    <h2 class="pb-2 border-bottom">Hassle Free Hostel Booking</h2>
                    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div class="feature col">
                            <h3 class="fs-2 text-body-emphasis">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        </div>
                        <div class="feature col">
                            <h3 class="fs-2 text-body-emphasis">Room of your Choice</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        </div>
                        <div class="feature col">
                            <h3 class="fs-2 text-body-emphasis">User-friendly UI</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        </div>
                    </div>
                </div>

                <hr />

                <section id="about" class="py-3 py-md-5 py-xl-8">
                    <div class="container">
                        <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                            <div class="col-12 col-lg-6 col-xl-5">
                                <img class="img-fluid rounded" width="200px" id="logo" src={logo} alt="" />
                            </div>
                            <div class="col-12 col-lg-6 col-xl-7">
                                <div class="row justify-content-xl-center">
                                    <div class="col-12 col-xl-11">
                                        <h2 class="h1 mb-3">Who Are We?</h2>
                                        <p class="lead fs-4 text-secondary mb-3">We are the students of Bennett University, studying Computer Science Engineering, currently in our second year.</p>
                                        <p class="mb-5">We have made this website as a part of our Second Year Project.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    

                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p class="col-md-4 mb-0 text-body-secondary">© 2024 Hostel Hub, Inc</p>
            
            
                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Book a Hostel</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
                    </ul>
                </footer>
    

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                <buttons />
            </div>
        );
    }
}

export default Home;