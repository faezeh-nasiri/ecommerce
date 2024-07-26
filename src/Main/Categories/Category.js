export default function ({img, title}){
    return (
        <div class="relative rounded-sm overflow-hidden group">
            <img src={img} alt="category 1" class="w-full"/>
            <a href="#"
                class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{title}</a>
        </div>

    )
}