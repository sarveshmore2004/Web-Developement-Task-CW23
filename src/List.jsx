import Person from './Person'

export default function List(props){

    return(
        <div className='list-container'>
            <Person id="4" profile={props.profile}/>
            <Person id="5" profile={props.profile}/>
            <Person id="6" profile={props.profile}/>
            <Person id="7" profile={props.profile}/>
            <Person id="8" profile={props.profile}/>
            <Person id="9" profile={props.profile}/>
        </div>
    )
}