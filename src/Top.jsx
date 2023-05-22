import './App.css'

export default function Top(props){
    
    return(
        <div className={props.className}>
            <div className="index">{props.index}</div>
            <div className={props.top ? "big-logo":"logos"}>
            </div>
            <div className={props.top ? "top-name":"person-name"} >{props.profile} </div>
        </div>
    )
}