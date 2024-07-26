import Category from "./Category"

export default function (){

    const products = [
        {id: 1, img: 'assets/images/category/category-1.jpg', title: 'Bedroom'},
        {id: 2, img: 'assets/images/category/category-2.jpg', title: 'Mattrass'},
        {id: 3, img: 'assets/images/category/category-3.jpg', title: 'Outdoor'},
        {id: 4, img: 'assets/images/category/category-4.jpg', title: 'Sofa'},
        {id: 5, img: 'assets/images/category/category-5.jpg', title: 'Living'},
        {id: 6, img: 'assets/images/category/category-6.jpg', title: 'Kitchen'},
    ]

    return (
        <div class="container py-16">
            <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div class="grid grid-cols-3 gap-3">
                <Category {...products[0]}/>
                <Category {...products[1]}/>
                <Category {...products[2]}/>
                <Category {...products[3]}/>
                <Category {...products[4]}/>
                <Category {...products[5]}/>
            </div>
        </div>
    )
}