import React from 'react';

export default function Carousel({ search, setSearch }) {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-caption" style={{ zIndex: 9 }}>
            <form className="d-flex justify-content-center">
              <input
                className="form-control me-2 w-75 bg-white text-dark"
                type="search"
                placeholder="Type in..."
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn text-white bg-success" type="submit" onClick={(e)=>{e.preventDefault()}}>Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/11/21/FNK_Intsant-Pot-Texas-Style-Chili-Mac_H1.jpg.rend.hgtvcom.1280.960.suffix/1700604212111.jpeg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2023/5/9/chocolate-pastry.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
