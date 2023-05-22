import Person from './Person'

export default function List(props){

    return(
        <div className='list-container'>
            <Person id="4" name="Joe" points="445" />
            <Person id="5" name="Jenny" points="438" />
            <Person id="6" name="Josh" points="432" />
            <Person id="7" name="Stella" points="321" />
            <Person id="8" name="Sally" points="300" />
            {/* <Person id="9" name="" points="" /> */}
        </div>
    )
}