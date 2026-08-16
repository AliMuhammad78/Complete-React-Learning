function Product({title , price =100, description, features }) {
    let styles = {bacckgroundColor : price >5000 ? "yellow" : ""};
    return(
                       // <div style={{backgroundColor: price >5000 ? "yellow " : ""}}> 
        <div style= {styles}> 
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
         {price > 5000 ? <p>Discount of 10% available!</p> : null}
        <ul>
            {features.map((feature, index) => (
                <li key={index}> 
                                 {feature}
                </li>
            ))}
        </ul>
        </div>
    )
 }
export default Product;