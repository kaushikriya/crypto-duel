export const GameInitialiser=()=>{
    const options= ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock']
    return(<div className="flex justify-center items-center w-full h-full">
        <div className="grid w-1/2 items-center">
            <div className="flex justify-center items-center">
            <input className="rounded-lg p-2 w-2/3" placeholder="address"/>
            </div>
        <div className="w-full p-5 flex justify-between items-center">
          {options.map((op,index)=> <button key={index} className="rounded-lg p-3 w-1/4 m-2 bg-purple-400">{op}</button>)}
        </div>
    </div>
    </div>
    )
}