import New from "./New";

export default function (){
    
    const News = [
        {id: 1, img: 'assets/images/products/product1.jpg', alt: 'product 1', title: 'Guyer Chair', price: 87.00, offerPrice: 73.90},
        {id: 1, img: 'assets/images/products/product4.jpg', alt: 'product 4', title: 'BED KING SIZE', price: 90.00, offerPrice: 84.90},
        {id: 1, img: 'assets/images/products/product2.jpg', alt: 'product 2', title: 'COUPLE SOFA', price: 70.00, offerPrice: 61.90},
        {id: 1, img: 'assets/images/products/product3.jpg', alt: 'product 3', title: 'MATTRASS X', price: 55.00, offerPrice: 45.90},
    ]

    return (
        <div class="container pb-16">
            <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <New {...News[0]}/>
                    <New {...News[1]}/>
                    <New {...News[2]}/>
                    <New {...News[3]}/>
                </div>
            <h2/>
        </div> 
    )
}