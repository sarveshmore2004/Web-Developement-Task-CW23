export default function Person(props){

    return(
        <div className='person-container'>
            <div className="position">{props.id}</div>
            <div className="logo">
                <img src={props.profile[props.id-1].avatar} />
            </div>
            <div className="name">{props.profile[props.id-1].name}</div>
            <div className="score">{props.profile[props.id-1].points}</div>
        </div>
    )
}