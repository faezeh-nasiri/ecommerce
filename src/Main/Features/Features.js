import Feature from "./Feature"

export default function ({title, text}){

    const features = [
        {id: 1, title: 'Free Shipping', text: 'Order over $200', img: 'assets/images/icons/delivery-van.svg'},
        {id: 2, title: 'Money Returns', text: '30 days money retunrs', img: 'assets/images/icons/money-back.svg'},
        {id: 3, title: '24/7 Support', text: 'Customer support', img: 'assets/images/icons/service-hours.svg'},
    ]

    return (
        <div className="container py-16 flex">
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
             <Feature {...features[0]}/>
             <Feature {...features[1]}/>
             <Feature {...features[2]}/>
            </div>
        </div>
    )
}