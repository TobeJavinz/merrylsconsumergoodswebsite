import { Link} from "react-router-dom";
import { logo1 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>  
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-red-500'> Super </span>
          <span className='text-blue-900'>Quality </span> Products
        </h2>
        <p className='mt-8 lg:max-w-lg info-text'>
        Discover Premium Quality and Convenience in Every Purchase, from All Kinds of School Supplies to Rice, Ensuring Innovation and Excellence in All We Offer.
        </p>
       
        <div className='mt-11'>
          <Link to='/aboutus'>
          <Button label='View details' />
          </Link>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={logo1}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
