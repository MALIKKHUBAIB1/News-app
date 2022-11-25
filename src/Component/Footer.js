import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
  <footer className="row row-cols-5 py-5 my-5 border-top">
    <div className="col">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
      </a>
      <p className="text-muted">© 2021</p>
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5>Abuot</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Abuot</a></li>
     
      </ul>
    </div>

    <div className="col">
      <h5>Contact</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
        
      </ul>
    </div>

    <div className="col">
      <h5>Home</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
    
      </ul>
    </div>
  </footer>
</div>
            </div>
        )
    }
}
