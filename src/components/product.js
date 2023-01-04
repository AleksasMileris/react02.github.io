

function Product(props){
    let title = props.product.title ;
    const description =  props.product.description;
    const price = props.product.price ;
    return (
    <div class='card  rounded-0'>
    <div class='card-header pt-3 pb-2 text-bg-danger text-center' ><h2 class=' font-monospace fst-normal '>{title}</h2></div>
    <div class='card_body pheight text-bg-danger bg-opacity-75 d-flex justify-content-end align-items-center flex-column'>
        <hr />
        <h3>{description}</h3>
        <hr />
    <p class=' mb-4 font-monospace fw-bold fs-4  ' >nuo <span class='fw-bold display-5'>{price}</span> EUR/men.</p>
    <div><button type="button" class="btn btn-dark mb-2">Learn more</button></div>
      </div>
  </div>
  )
}
export default Product;

function Lectors(props1){
    const img = props1.teach.img
    const firstName = props1.teach.firstName
    const lastName = props1.teach.lastName
    const profesion = props1.teach.profesion
    const adress = props1.teach.adress
    return (
    <div class=' row'>
        <div class='col-3 p-3'>
          <img class='rounded-circle'src={img} alt="React Image" />
          </div>


          <div class='col-9 d-flex flex-column p-0 justify-content-end'>
            <h2 class=''>{firstName} <span class='fs-4 fw-normal'>{lastName}</span></h2>
            <p class='fw-lighter'>{profesion}<br></br>
            {adress}</p>
          </div>
          </div>
    )
}



export {Lectors};