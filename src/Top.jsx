import './App.css'

export default function Top(props){
    
    return(
        <div className={props.className}>
            <div className="index">{props.index}</div>
            <div className={props.top ? "big-logo":"logos"}>
                <img src={props.profile.avatar} />
            </div>
            <div className={props.top ? "top-name":"person-name"} >{props.profile.name} · {props.profile.points}</div>
        </div>
    )
}