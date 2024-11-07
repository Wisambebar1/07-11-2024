const Person=(props)=>{
    return (<article className="person">

        <img src={props.person.image} alt={props.person.name} className="img"></img>
        <div>
            <h4>{props.person.name}</h4>
        </div>
    </article>)
}
export default Person