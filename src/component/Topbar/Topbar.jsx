
export default function Topbar(props){
    return (
        <div className="bg-white w-full px shadow-sm  py-8 px-10 ">
            <h1 className="text-2xl">{props.name}</h1>
        </div>
    )
}