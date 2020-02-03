import React from "react";
import CarouselPage from './react-bootstrap/CarouselPage';

export default function Dashboard() {

  const hitTop = () => {
    return fetch('/api/hit/hit')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return JSON.stringify(myJson);
      //return JSON.parse(myJson);
    });
  }
  console.log(hitTop());

  return (
    <>
      <div className="row">
        <div className="col-xl-6">
          <CarouselPage text='hit TOP5' data= {hitTop()}/>
        </div>

        <div className="col-xl-6">
          <CarouselPage text='scrap TOP5'/>
        </div>
      </div>
    </>
  );
}
