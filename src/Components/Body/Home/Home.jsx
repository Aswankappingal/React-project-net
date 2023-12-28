import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>

    <div className="conatiner-fluid">

    <div className="conatiner-fluid">
    <div className="banner">
       <h2>THIS IS HOME PAGE</h2>
       <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum quasi, sunt nesciunt cupiditate mollitia, explicabo autem expedita eligendi laboriosam minima eum aut nihil nisi, laborum esse at itaque delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque asperiores porro sunt. Quidem iste dolor minima amet, ad vel quas corporis consequatur beatae distinctio, vero cum. Esse, consectetur modi. adipisicing elit. Corrupti sequi voluptatum, saepe accusamus recusandae aperiam maxime maiores natus molestiae beatae unde reprehenderit distinctio doloremque! Dicta odit cumque numquam autem voluptatem.</p>


     <div className="mainbtn">
     <div className="buttons-full-data">
        <a href="" >ABOUT</a>
        <a href="" id='bttt'>CONTACT</a>
      </div>
     </div>





      
    </div>
    <div className="support-full">
      <div className="support-us">
        <h2>Contact us!</h2>
      </div>
      <div className="support-para">
        <p>The Home Project is funded by the community. Join us in empowering learners around the globe by supporting
          The Home Project!</p>
      </div>
      <div className="support-links">
        <a href="#" id="learn-more">Learn more</a>
        <a href="#" id="Donate-now">Click now<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div>

    </div>
    <div className="images-part">
      <div className='images-full'><img src="../../../../public/pexels-nappy-935949.jpg" alt="" /></div>
     
      <div className='para'>
      <div className="head">
        <h4> Group Discussion</h4>
      </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea ipsa doloribus, minus quisquam esse natus minima incidunt autem optio voluptate. Possimus consectetur voluptatem beatae corporis cumque molestiae voluptates vitae.</p>
      
      </div>

    </div>
   














    <div id="carouselExampleControls" className="carousel slide caro-width" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active text-only">
            <h4>Details</h4>
            <h5>Default model text</h5>
            <p>Variouseditors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model
              text, and a search for lorem ipsum will uncover many web sites still in their infancy. editors now use
              Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still
              in their infancy.</p>
          </div>
          <div className="carousel-item text-only">
            <h4>Data includes</h4>
            <h5>Default model text</h5>
            <p>editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many
              web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a
              search for lorem ipsum will uncover many web sites still in their infancy. Variouseditors now use Lorem
              Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in
              their infancy. Various</p>
          </div>
          <div className="carousel-item text-only">
            <h4>More info</h4>
            <h5>Default model text</h5>
            <p>Variouseditors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model
              text, and a search for lorem ipsum will uncover many web sites still in their infancy. editors now use
              Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still
              in their infancy.</p>
          </div>
        </div>
        <div className="prevoise-button-main">
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <i className="fa fa-chevron-left pre-log" aria-hidden="true"></i>
            <span className="visually-hidden ">Previous</span>
          </button>
        </div>
        <div className="next-button-main">
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <i className="fa fa-chevron-right pre-log2" aria-hidden="true"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </div>

      
    </div>

  



          

      
    </div>
  )
}

export default Home
