
import './card-container.style.css'


const CardContainer = ({monster}) => {


        const {id, name, email} = monster

        return (
            <div className="card-container" key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${monster.id+21}?set=set2$size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
        

export default CardContainer;