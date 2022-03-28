export const fakeData =
[{
  "id": 1,
  "img":"https://i.ebayimg.com/images/g/rF0AAOSwubRXHodA/s-l300.jpg",
  "name": "Black & white baby-cloth",
  "price": 20,
  "discount":2,
  "discoutPrice":20-2/100*20,
  "quantity":1,
  "desc" :"Lorem ipusm quas a facere quibusdam porro qui consequuntur animi obcaecati repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. s lLorem ipsum dolor sit amet consectetur adipisicing elit. "
}, {
  "id": 2,
  "img": "https://i.ebayimg.com/images/g/rF0AAOSwubRXHodA/s-l300.jpg",
  "name": "winnter comfortable baby-cloth",
  "price": 40,
  "discount":3,
  "discoutPrice":40-3/100*40,
  "quantity":1,
  "desc" :"Lorem ipusm quas a facere quibusdam porro qui consequuntur animi obcaecati repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. s lLorem ipsum dolor sit amet consectetur adipisicing elit.  "
}, {
  "id": 3,
   "img":"https://i.ebayimg.com/images/g/rF0AAOSwubRXHodA/s-l300.jpg",
  "name": "cloth for 6 month baby",
  "price": 30,
  "discount":4,
  "discoutPrice":30-4/100*30,
  "quantity":1,
  "desc" :"Lorem ipusm quas a facere quibusdam porro qui consequuntur animi obcaecati repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. s lLorem ipsum dolor sit amet consectetur adipisicing elit.  "

}, {
  "id": 4,
  "img": "https://i.ebayimg.com/images/g/rF0AAOSwubRXHodA/s-l300.jpg",
  "name": "pants with smart-shirt",
  "price": 80,
  "discount":7,
  "discoutPrice":80-8/100*80,
  "quantity":1,
  "desc" :"Lorem ipusm quas a facere quibusdam porro qui consequuntur animi obcaecati repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. s lLorem ipsum dolor sit amet consectetur adipisicing elit."
},{
    "id": 5,
    "img": "https://i.ebayimg.com/images/g/rF0AAOSwubRXHodA/s-l300.jpg",
    "name": "summer-cloth for little baby",
    "price": 35,
    "discount":4,
    "discoutPrice":35-4/100*35,
    "quantity":1,
    "desc" :"Lorem ipusm quas a facere quibusdam porro qui consequuntur animi obcaecati repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. s lLorem ipsum dolor sit amet consectetur adipisicing elit. "
  
  },  {
    "id": 6,
    "img": "https://i.ebayimg.com/images/g/rF0AAOSwubRXHodA/s-l300.jpg",
    "name": "green pants with cloth",
    "price": 20,
    "discount":2,
    "discoutPrice":20-2/100*20,
    "quantity":1,
    "desc" :"Lorem ipusm quas a facere quibusdam porro qui consequuntur animi obcaecati repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. s lLorem ipsum dolor sit amet consectetur adipisicing elit. "
  
  }, 
  {
    "id": 7,
    "img": "https://i.ebayimg.com/images/g/rF0AAOSwubRXHodA/s-l300.jpg",
    "name": "round-shirt for little girl",
    "price": 50,
    "discount":5,
    "discoutPrice":50-5/100*50,
    "quantity":1,
    "desc" :"Lorem ipusm quas a facere quibusdam porro qui consequuntur animi obcaecati repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. s lLorem ipsum dolor sit amet consectetur adipisicing elit."
    }, {
    "id": 8,
    "img": "https://i.ebayimg.com/images/g/rF0AAOSwubRXHodA/s-l300.jpg",
    "name": "summer white clothe with pants",
    "price": 70,
    "discount":6,
    "discoutPrice":70-6/100*70,
    "quantity":1,
    "desc" :"Lorem ipusm quas a facere quibusdam porro qui consequuntur animi obcaecati repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. s lLorem ipsum dolor sit amet consectetur adipisicing elit. "
  
  }
]
export const foundById = (id) => {
  return fakeData.find(e => e.id == id)
}