import Card from "../Card";

export default function (){

    const products = [
        {id: 1, img: 'assets/images/products/product1.jpg', alt: 'product 1', title: 'Guyer Chair', price: 87.00, offerPrice: 73.90},
        {id: 1, img: 'assets/images/products/product4.jpg', alt: 'product 4', title: 'BED KING SIZE', price: 90.00, offerPrice: 84.90},
        {id: 1, img: 'assets/images/products/product2.jpg', alt: 'product 2', title: 'COUPLE SOFA', price: 70.00, offerPrice: 61.90},
        {id: 1, img: 'assets/images/products/product3.jpg', alt: 'product 3', title: 'MATTRASS X', price: 55.00, offerPrice: 45.90},
    ]

    return (
        <div class="container pb-16">
            <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card {...products[0]}/>
                <Card {...products[1]}/>
                <Card {...products[2]}/>
                <Card {...products[3]}/>
                <Card {...products[0]}/>
                <Card {...products[1]}/>
                <Card {...products[2]}/>
                <Card {...products[3]}/>
            </div>
        </div>    
    )
}
