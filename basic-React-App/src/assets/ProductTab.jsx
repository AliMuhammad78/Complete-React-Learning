import Product from "./Product";

function ProductTab() {
    let features = ["high quality", "2 year warranty", "free shipping"];
    return(
        <div>
        <Product title = "phone" price = {1000}  description = "this is a good phone" features= {["durable" , "high tech"]} />
        <Product title = "laptop" price = {2000} description = "this is a good laptop" features={features} />
        <Product title = "tablet" price={5380} description = "this is a good tablet" features={features} />
        </div>
    )
}
export default ProductTab;