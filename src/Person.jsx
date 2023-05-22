export default function Person(props){

    return(
        <div className='person-container'>
            <div className="position">{props.id}</div>
            <div className="logo">
            </div>
            <div className="name">{props.name}</div>
            <div className="score">{props.points}</div>
        </div>
    )
}