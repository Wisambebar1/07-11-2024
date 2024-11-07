import Person from "./Person"
const List=({people})=>{
    const p=people.map((person)=>{
        return <Person key={person.id}/>
})
console.log(p)
    return (
    <section>
        {people.map((person)=>{
            return <Person key={person.id}/>
        })}
            </section>)
}
export default List