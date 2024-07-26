export default function ({title, text, img}){
    return (
    <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
        <img src={img} alt="Delivery" class="w-12 h-12 object-contain"/>
        <div>
            <h4 class="font-medium capitalize text-lg">{title}</h4>
            <p class="text-gray-500 text-sm">{text}</p>
        </div>
    </div> 

    )
}