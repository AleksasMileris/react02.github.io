import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css' ;
import Product, { Lectors } from './components/product';
import prekesData, {lectorData} from './data/productData';



function App() {

  const prekes = prekesData

  const allProducts =[];
  for(let i=0 ;i<prekes.length;i++){
    allProducts.push(
    <div class='col-4 mt-3'>

      <Product product={prekes[i]}></Product>

        </div>
      )
  }


  const teachers = lectorData;
  const allTeachers= [];
  for(let o=0 ; o< teachers.length;o++){
    allTeachers.push(
      <div class='col-6 border mt-4 row '>
        <Lectors teach={teachers[o]}></Lectors>

      </div>
      )
  }
  


  return (
    <div class='container'>
    <div  className='container text-center mt-5'>
      <div class='row' >
        <div class='col-md-4'>
          <div class='card  rounded-0'>
            <div class='card-header pt-3 pb-2 text-bg-info'><h2 class=' font-monospace fst-normal '>React kursai</h2></div>
            <div class='card_body pheight text-bg-info bg-opacity-50 d-flex justify-content-end align-items-center flex-column'>
            <p class=' mb-4 font-monospace fw-bolder fs-4   ' >nuo <span class='fw-bold display-5'>9.99</span> EUR/men.</p>
            <div><button type="button" class="btn btn-dark mb-2">Learn more</button></div>
              </div>
          </div>
        
        </div>

        <div class='col-md-4'>
          <div class='card  rounded-0'>
            <div class='card-header pt-3 pb-2 text-bg-danger'><h2 class=' font-monospace fst-normal '>Angular.JS kursai</h2></div>
            <div class='card_body pheight text-bg-danger bg-opacity-75 d-flex justify-content-end align-items-center flex-column'>
            <p class=' mb-4 font-monospace fw-bold fs-4  ' >nuo <span class='fw-bold display-5'>29.99</span> EUR/men.</p>
            <div><button type="button" class="btn btn-dark mb-2">Learn more</button></div>
              </div>
          </div>

        </div>
        
        <div class='col-md-4'>
          <div class='card  rounded-0'>
            <div class='card-header pt-3 pb-2 text-bg-secondary'><h2 class=' font-monospace fst-normal '>PHP kursai</h2></div>
            <div class='card_body pheight text-bg-secondary bg-opacity-75 d-flex justify-content-end align-items-center flex-column'>
            <p class=' mb-4 font-monospace fw-bolder fs-4  ' >nuo <span class='fw-bold display-5'>49.99</span> EUR/men.</p>
            <div><button type="button" class="btn btn-dark mb-2">Learn more</button></div>
              </div>
          </div>

        </div>
       
      </div>
    </div>




    <div class='mt-5'>
      <h2>Mūsu dėstytojai</h2>
      <hr ></hr>
    </div>




    <div class='container '>

      <div class='row justify-content-between mt-5'>

        <div class='col-6 border row '>
          
          <div class='col-3 p-3'>
          <img class='rounded-circle'src="https://avatars.dicebear.com/v2/avataaars/e3ca288f13da554c16bb7d3a5bccd638.svg" alt="React Image" />
          </div>


          <div class='col-9 d-flex flex-column p-0 justify-content-end'>
            <h2 class=''>Gordon <span class='fs-4 fw-normal'>Samuel</span></h2>
            <p class='fw-lighter'>Ui UX Designer<br></br>
            795 Ukmerges apsk. vienzindziu g. 25-67, Lietuva, LT-98456</p>
          </div>
          
        </div>

        
        <div class='col-6 border  row '>
          <div class='col-3 p-3'>
          <img class='rounded-circle 'src="https://avatars.dicebear.com/v2/avataaars/72d7fd454da483b5af00213da9a858b8.svg" alt="React Image" />
          </div>


          <div class='col-9 d-flex flex-column p-0 d-flex justify-content-end'>
            <h2 class=''>Gordon <span class='fs-4 fw-normal'>Samuel</span></h2>
            <p class='fw-lighter'>Ui UX Designer<br></br>
            795 Ukmerges apsk. vienzindziu g. 25-67, Lietuva, LT-98456</p>
          </div>
        </div>

      </div>


      <div class='row justify-content-between mt-4'>

        <div class='col-6 border row '>
          
          <div class='col-3 p-3'>
          <img class='rounded-circle'src="https://avatars.dicebear.com/v2/avataaars/dc2456fb30415e7ed16a54dda3211473.svg" alt="React Image" />
          </div>


          <div class='col-9 d-flex flex-column p-0 justify-content-end'>
            <h2 class=''>Gordon <span class='fs-4 fw-normal'>Samuel</span></h2>
            <p class='fw-lighter'>Ui UX Designer<br></br>
            795 Ukmerges apsk. vienzindziu g. 25-67, Lietuva, LT-98456</p>
          </div>
          
        </div>

        
        <div class='col-6 border  row '>
          <div class='col-3 p-3'>
          <img class='rounded-circle 'src="https://avatars.dicebear.com/v2/avataaars/245741e63e89abb81748ddc3a5f5bad6.svg" alt="React Image" />
          </div>


          <div class='col-9 d-flex flex-column p-0 d-flex justify-content-end'>
            <h2 class=''>Gordon <span class='fs-4 fw-normal'>Samuel</span></h2>
            <p class='fw-lighter'>Ui UX Designer<br></br>
            795 Ukmerges apsk. vienzindziu g. 25-67, Lietuva, LT-98456</p>
          </div>
        </div>

           {/* ANTROS DIENOS ND
          ANTROS DIENOS ND
          ANTROS DIENOS ND
          ANTROS DIENOS ND
          ANTROS DIENOS ND
          ANTROS DIENOS ND
          ANTROS DIENOS ND  */}
          <hr class='mt-5' />
          <hr />
          <hr />

          <div class='m-0 mt-5 p-0 row'>
            <h2 class='text-center'>Specialus Pasiulymai</h2>
            <div class='col-6 mt-4'><Product product={prekes[0]}></Product></div>
            <div class='col-6 mt-4'><Product product={prekes[1]}></Product></div>
            
          </div>

            <div class='m-0 mt-5 text-center p-0 '><h2>Visi Pasiulymai</h2></div>






          <div class='m-0 mt-5 mb-5 p-0 row'>
            {allProducts}
            
          </div>
            <div class='text-center'><h2>All Our Lectors</h2></div>
          <div class='container '>

              <div class='row justify-content-between mt-5'>

              {allTeachers}




              </div>
          </div>


      </div>
    </div>
    </div>
  );
}

export default App;



