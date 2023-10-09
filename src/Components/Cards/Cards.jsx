import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({card}) => {

    const {image, name, price, description, id} = card || {}

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body bg-slate-50">
          <h2 className="card-title">{name}</h2>
          <p className="text-red-600">Price: ${price}</p>
          {
            description.length > 100 ? <p>{description?.slice(0,100)} <Link to={`/card/${id}`} className='text-blue-500 font-semibold'>...Read more</Link></p> 
            : <p className="text-justify">{description}</p>
          }
          <div className="card-actions">
            <Link to={`/card/${id}`}>
                <button className="btn btn-primary">Vew Details</button>      
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Cards;

Cards.propTypes = {
    card: PropTypes.node,
}